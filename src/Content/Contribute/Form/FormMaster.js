import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormContainer } from './formstyles'

import FormFirst from './FormFirst';
import FormSecond from './FormSecond';
import FormThird from './FormThird';

class FormMaster extends Component {
	constructor(props) {
		super(props)

		this.state = {
			formProgress: 'first',
			game: null,
			region: null,
			date: new Date,
			title: '',
			detail: '',
			regions: [],
			regionLevel: null,
			regionLevels: [
				{
					value: 'international',
					label: 'International'
				},
				{
					value: 'national',
					label: 'National'
				},
				{
					value: 'regional',
					label: 'Regional'
				},
				{
					value: 'local',
					label: 'Local'
				}
			],
			characters: [],
			ranks: [
				{
					sponsor_prefix: '',
					player_tag: '',
					played_characters: ''
				},
				{
					sponsor_prefix: '',
					player_tag: '',
					played_characters: ''
				},
				{
					sponsor_prefix: '',
					player_tag: '',
					played_characters: ''
				},
				{
					sponsor_prefix: '',
					player_tag: '',
					played_characters: ''
				},
				{
					sponsor_prefix: '',
					player_tag: '',
					played_characters: ''
				}
			],
			warning: null,
			showModal: false,
			submitting: false,
			successfulSubmit: false
		}
	}

	requestRegions = async query => {
		try {
			const response = await fetch(`${process.env.API_URL}/api/regions/game`, {
				method: 'POST',
				body: JSON.stringify(query),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const body = await response.json();
			if (!response.ok) {
				console.log('error requesting regions for game: ', response);
			}
			else {
				this.setState({...body});
			}
		}
		catch (e) {
			console.log(e);
		}
	}

	requestGameCharacters = async query => {
		try {
			const response = await fetch(`${process.env.API_URL}/api/games/characters`, {
				method: 'POST',
				body: JSON.stringify(query),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const body = await response.json();
			if (!response.ok) {
				console.log('error requesting regions for game: ', response);
			}
			else {
				this.setState({...body});
			}
		}
		catch (e) {
			console.log(e);
		}
	}

	requestMatchingPlayers = async inputValue => {
		const { game } = this.state
		const jsonQuery = {'gameAlias': game.value, 'match': inputValue.toLowerCase()}
		try {
			const response = await fetch(`${process.env.API_URL}/api/players/match`, {
				method: 'POST',
				body: JSON.stringify(jsonQuery),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const body = await response.json();
			if (!response.ok) {
				console.log('error requesting regions for game: ', response);
				return []
			}
			else {
				const { matchedPlayers } = body;
				return matchedPlayers;
			}
		}
		catch (e) {
			console.log(e);
			return []
		}
	}

	insertNewRankingData = async () => {
		const { history } = this.props;
		const { game, region, date, title, detail, ranks } = this.state;
		const jsonQuery = {game, region, date, title, detail, ranks};
		console.log(jsonQuery);
		try {
			const response = await fetch(`${process.env.API_URL}/api/rankings/new`, {
				method: 'POST',
				body: JSON.stringify(jsonQuery),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (!response.ok) {
				console.log('error requesting regions for game: ', response);
				this.setState({submitting: false, warning: 'Error submitting ranking.'});
			}
			else {
				this.setState({successfulSubmit: true});
				setTimeout(() => {
					history.push('/');
				}, 3000)
			}
		}
		catch (e) {
			console.log(e);
		}
	}

	handleGameChange = game => {
		const jsonQuery = {'gameAlias': game.value}
		const ranks = [
			{
				sponsor_prefix: '',
				player_tag: '',
				played_characters: ''
			},
			{
				sponsor_prefix: '',
				player_tag: '',
				played_characters: ''
			},
			{
				sponsor_prefix: '',
				player_tag: '',
				played_characters: ''
			},
			{
				sponsor_prefix: '',
				player_tag: '',
				played_characters: ''
			},
			{
				sponsor_prefix: '',
				player_tag: '',
				played_characters: ''
			}
		]
		this.setState({game, region: null, warning: null, ranks: ranks});
		this.requestRegions(jsonQuery);
	}

	handleRegionChange = region => {
		this.setState({region, warning: null});
	}

	handleNewRegion = regionLevel => {
		const { region } = this.state;
		this.setState({regionLevel, region: Object.assign({}, region, {...region, level: regionLevel.value})});
	}

	handleDateChange = date => {
		this.setState({date, warning: null});
	}

	handleTitleChange = e => {
		this.setState({title: e.target.value, warning: null});
	}

	handleDetailChange = detail => {
		this.setState({detail});
	}

	handleRankTagChange = (player_tag, i) => {
		const { ranks } = this.state;
		this.setState({ranks: ranks.map((rank, ind) => (i === ind ? {...rank, player_tag} : rank) ), warning: null});
	}

	handleRankPrefixChange = (e, i) => {
		// deprecated
		const { ranks } = this.state;
		this.setState({ranks: ranks.map((rank, ind) => (i === ind ? {...rank, sponsor_prefix: e.target.value} : rank) )});
	}

	handleCharacterSelect = (played_characters, i) => {
		const { ranks } = this.state;
		this.setState({ranks: ranks.map((rank, ind) => (i === ind ? {...rank, played_characters} : rank) ), warning: null});
	}

	handleAddRankField = e => {
		e.currentTarget.blur();
		e.currentTarget.scrollIntoView({ behavior: 'smooth' });
		const newRank = { sponsor_prefix: '', player_tag: '', played_characters: '' }
		const { ranks } = this.state;
		const newRanks = ranks.slice();
		newRanks.push(newRank);
		this.setState({ranks: newRanks});
	}

	handleRemoveRankField = e => {
		e.currentTarget.blur();
		const { ranks } = this.state;
		const newRanks = ranks.slice();
		newRanks.pop();
		this.setState({ranks: newRanks});
	}

	handleClear = (fieldName, form) => {
		let { ranks } = this.state;
		let cleared = null;
		if (fieldName === 'game') {
			ranks = [
				{
					sponsor_prefix: '',
					player_tag: '',
					played_characters: ''
				},
				{
					sponsor_prefix: '',
					player_tag: '',
					played_characters: ''
				},
				{
					sponsor_prefix: '',
					player_tag: '',
					played_characters: ''
				},
				{
					sponsor_prefix: '',
					player_tag: '',
					played_characters: ''
				},
				{
					sponsor_prefix: '',
					player_tag: '',
					played_characters: ''
				}
			]
		}
		else if (fieldName === 'title') {
			cleared = ''
		}
		else if (fieldName === 'date') {
			cleared = new Date
		}
		this.setState({[fieldName]: cleared, formProgress: form, ranks: ranks});
	}

	showPreview = e => {
		e.target.blur();
		const focusable = document.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select');
		for (let ele of focusable) {
			if (!ele.classList.contains('preview')) {
				ele.setAttribute('tabindex', -1);
			}
		}
		this.setState({showModal: true})
	}

	closePreview = () => {
		this.setState({showModal: false});
	}

	validateRanks = () => {
		const { ranks } = this.state;
		for (let rank of ranks) {
			const { played_characters, player_tag } = rank;
			if (!played_characters || !player_tag || played_characters.length === 0) {
				return false;
			}
		}
		return true;
	}

	submitFirst = e => {
		e.preventDefault();
		const { game, region } = this.state;
		const jsonQuery = {'gameAlias': game.value}
		this.requestGameCharacters(jsonQuery);
		if (!game || !region) {
			this.setState({warning: 'You must select both game and region.'});
		}
		else {
			this.setState({formProgress: 'second', warning: null})
		}
	}

	submitSecond = e => {
		e.preventDefault();
		const { date, title } = this.state;
		if (!date || !title) {
			this.setState({warning: 'Date and title are required.'})
		}
		else {
			this.setState({formProgress: 'third', warning: null});
		}
	}

	submitThird = e => {
		e.preventDefault();
		const isValidated = this.validateRanks();
		if (!isValidated) {
			this.setState({warning: 'At least 5 completed players required'})
		}
		else if (isValidated) {
			this.setState({submitting: true});
			this.insertNewRankingData();
		}
	}

	render() {
		const { regions, game, region, date, title, detail, ranks, characters, regionLevels, regionLevel, formProgress, warning, showModal, submitting, successfulSubmit } = this.state;
		const { gamesInfo } = this.props;
		const gamesOptions = gamesInfo.map(game => ({value: game.game_alias, label: game.game_name}));
		return(
			<FormContainer>
				{(() => {
					switch(formProgress) {
						case 'first':
							return( 
								<FormFirst
									game={game}
									handleGameChange={this.handleGameChange}
									gamesOptions={gamesOptions}
									region={region}
									handleRegionChange={this.handleRegionChange}
									regionOptions={regions}
									regionLevel={regionLevel}
									regionLevels={regionLevels}
									handleNewRegion={this.handleNewRegion}
									warning={warning}
									submitFirst={this.submitFirst}
								/>
							)
						case 'second':
							return(
								<FormSecond
									formData={this.state}
									handleClear={this.handleClear}
									date={date}
									handleDateChange={this.handleDateChange}
									title={title}
									handleTitleChange={this.handleTitleChange}
									detail={detail}
									handleDetailChange={this.handleDetailChange}
									warning={warning}
									submitSecond={this.submitSecond}
								/>
							)
						case 'third':
							return(
								<FormThird
									formData={this.state}
									closePreviewModal={this.closePreview}
									showPreviewModal={this.showPreview}
									showModal={showModal}
									handleClear={this.handleClear}
									characters={characters}
									ranks={ranks}
									matchPlayers={this.requestMatchingPlayers}
									handleRankTagChange={this.handleRankTagChange}
									handleCharacterSelect={this.handleCharacterSelect}
									handleAddRankField={this.handleAddRankField}
									handleRemoveRankField={this.handleRemoveRankField}
									warning={warning}
									submitting={submitting}
									success={successfulSubmit}
									submitThird={this.submitThird}
								/>
							)
						default:
							null
						}
					}
				)()}
			</FormContainer>
		)
	}
}

export default FormMaster;

FormMaster.propTypes = {
	gamesInfo: PropTypes.array,
	history: PropTypes.object
}