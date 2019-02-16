import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, FieldContainer, WarningText, FormButton, FormHeader } from './formstyles'
import { WarningIcon } from '../../../style';

import FormField from './FormField';
import SelectedOptions from './SelectedOptions';
import DateField from './DateField';
import TextInput from './TextInput';
import FileInput from './FileInput';
import DetailMarkdown from './DetailMarkdown';
import RankField from './RankField';
import PreviewModal from './PreviewModal';

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

class SubmitPrForm extends Component {
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
					tag: '',
					characters: []
				},
				{
					tag: '',
					characters: []
				},
				{
					tag: '',
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
		this.setState({ranks: ranks.map((rank, ind) => (i === ind ? {...rank, tag: e.target.value} : rank) )});
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

	showPreview = () => {
		const focusable = document.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select');
		for (let ele of focusable) {
			if (!ele.classList.contains('preview')) {
				ele.setAttribute('tabindex', -1);
			}
		}
		this.setState({showModal: true})
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
							return <div>
								<FormField
									name="game"
									value={game}
									handleChange={this.handleGameChange}
									options={gamesOptions}
									isDisabled={false}
									fieldText="Game not listed? Join the Discord and request it! Always looking to add new titles."
								/>
								<FormField
									name="region"
									value={region}
									handleChange={this.handleRegionChange}
									options={regions}
									isDisabled={game ? false : true}
									fieldText="Or add a new region if it is not listed."
								/>
								<FormButton 
									onClick={e => this.submitFirst(e)}
								>
									Create New Ranking
								</FormButton>
								{warning ? (<WarningText><WarningIcon className="svg-icon" /><span>{warning}</span></WarningText>) : null}
							</div>
						case 'second':
							return <div>
								<SelectedOptions formData={this.state} handleClick={this.handleClear} />
								<FieldContainer style={{justifyContent: 'space-between', flexWrap: 'wrap'}}>
									<DateField date={date} handleChange={this.handleDateChange}/>
									<TextInput name="title" placeholder="Enter ranking title..." value={title} handleChange={this.handleTitleChange} />
									<FileInput />
								</FieldContainer>
								<DetailMarkdown value={detail} handleChange={this.handleDetailChange} />
								<FormButton
									onClick={e => this.submitSecond(e)}
								>
									Preview and Add Ranks
								</FormButton>
								{warning ? (<WarningText><WarningIcon className="svg-icon" /><span>{warning}</span></WarningText>) : null}
							</div>
						case 'third':
							return <div>
								{showModal ? (<PreviewModal preview={this.state} handleClick={() => this.setState({showModal: false})} />) : null}
								<SelectedOptions formData={this.state} handleClick={this.handleClear} />
								<FieldContainer style={{flexDirection: 'column', paddingTop: '0'}}>
									<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #142543', padding: '0 1rem'}}>
										<FormHeader>
											Set Player Ranks
										</FormHeader>
										<FormButton
											className="secondary-button"
											onClick={() => this.showPreview()}
										>
											Preview
										</FormButton>
									</div>
									{ranks.map((rank, i) => {
										return(
											<RankField
												key={i}
												rankNum={i + 1}
												value={rank.tag}
												handleChange={e => this.handleRankTagChange(e, i)}
											/>
										)
									})}
								</FieldContainer>
								<FormButton
									onClick={e => this.submitThird(e)}
								>
									Preview and Submit
								</FormButton>
							</div>
						default:
							null
						}
					}
				)()}
			</FormContainer>
		)
	}
}

export default SubmitPrForm;

SubmitPrForm.propTypes = {
	gamesInfo: PropTypes.array
}