import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../style';
import { FormContainer, FieldContainer, WarningText } from './formstyles'

import FormField from './FormField';
import SelectedOptions from './SelectedOptions';
import DateField from './DateField';
import TextInput from './TextInput';
import FileInput from './FileInput';
import DetailMarkdown from './DetailMarkdown';

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
			ranks: [],
			warning: null
		}
	}

	handleGameChange = game => {
		this.setState({game, warning: null});
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

	handleClear = fieldName => {
		this.setState({[fieldName]: null, formProgress: 'first'});
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

	render() {
		const { game, region, date, title, detail, formProgress, warning } = this.state;
		const { gamesInfo } = this.props;
		const gamesOptions = gamesInfo.map(game => ({value: game.game_alias, label: game.game_name}))
		let firstLabels;
		if (game && region) {
			firstLabels = [{variable: 'game', label: game.label}, {variable: 'region', label: region.label}];
		}
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
								<Button 
									style={{margin: '1rem 0', float: 'right'}}
									onClick={e => this.submitFirst(e)}
								>
									Create New Ranking
								</Button>
								{warning ? (<WarningText>{warning}</WarningText>) : null}
							</div>
						case 'second':
							return <div>
								<SelectedOptions handleClick={this.handleClear} labels={firstLabels}/>
								<FieldContainer style={{justifyContent: 'space-around', flexWrap: 'wrap'}}>
									<DateField date={date} handleChange={this.handleDateChange}/>
									<TextInput name="title" placeholder="Enter ranking title..." value={title} handleChange={this.handleTitleChange} />
									<FileInput />
								</FieldContainer>
								<DetailMarkdown value={detail} handleChange={this.handleDetailChange} />
								<Button
									style={{margin: '1rem 0', float: 'right'}}
									onClick={e => this.submitSecond(e)}
								>
									Preview and Add Ranks
								</Button>
								{warning ? (<WarningText>{warning}</WarningText>) : null}
							</div>
						case 'third':
							return <div>
								<FieldContainer>
									dab, third component; dab.
								</FieldContainer>
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