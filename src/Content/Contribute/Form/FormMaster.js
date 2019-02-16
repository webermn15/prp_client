import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormContainer } from './formstyles'

import FormFirst from './FormFirst';
import FormSecond from './FormSecond';
import FormThird from './FormThird';

const regions = [
	{
		value: 1,
		label: 'Chicago',
		region_alias: 'chicago'
	},
	{
		value: 2,
		label: 'Southern California',
		region_alias: 'socal'
	},
	{
		value: 3,
		label: 'New England',
		region_alias: 'new-england'
	},
	{
		value: 4,
		label: 'South Florida',
		region_alias: 'sfl'
	}
]

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
			ranks: [
				{
					sponsor_prefix: '',
					player_tag: '',
					characters: []
				},
				{
					sponsor_prefix: '',
					player_tag: '',
					characters: []
				},
				{
					sponsor_prefix: '',
					player_tag: '',
					characters: []
				}
			],
			warning: null,
			showModal: false
		}
	}

	handleGameChange = game => {
		this.setState({game, region: null, warning: null});
	}

	handleRegionChange = region => {
		this.setState({region, warning: null});
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

	handleRankTagChange = (e, i) => {
		const { ranks } = this.state;
		this.setState({ranks: ranks.map((rank, ind) => (i === ind ? {...rank, player_tag: e.target.value} : rank) )});
	}

	handleRankPrefixChange = (e, i) => {
		const { ranks } = this.state;
		this.setState({ranks: ranks.map((rank, ind) => (i === ind ? {...rank, sponsor_prefix: e.target.value} : rank) )});
	}

	handleClear = (fieldName, form) => {
		let cleared = null;
		if (fieldName === 'title') {
			cleared = ''
		}
		else if (fieldName === 'date') {
			cleared = new Date
		}
		this.setState({[fieldName]: cleared, formProgress: form});
	}

	showPreview = e => {
		e.target.blur()
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

	submitFirst = e => {
		e.preventDefault();
		const { game, region } = this.state;
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
		console.log(this.state);
	}

	render() {
		const { game, region, date, title, detail, ranks, formProgress, warning, showModal } = this.state;
		const { gamesInfo } = this.props;
		const gamesOptions = gamesInfo.map(game => ({value: game.game_alias, label: game.game_name}))
		console.log(this.state);
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
									ranks={ranks}
									handleRankTagChange={this.handleRankTagChange}
									handleRankPrefixChange={this.handleRankPrefixChange}
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
	gamesInfo: PropTypes.array
}