import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../style';
import { FormContainer, FieldContainer, WarningText } from './formstyles'

import FormField from './FormField';
import SelectedOptions from './SelectedOptions';
import DateField from './DateField';
import TextInput from './TextInput';

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
			date: undefined,
			title: '',
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

	handleTitleChange = e => {
		this.setState({title: e.target.value});
	}

	submitForm = e => {
		e.preventDefault();
		const { game, region } = this.state;
		if (!game || !region) {
			this.setState({warning: 'You must select both game and region before proceeding.'});
		}
		else {
			this.setState({formProgress: 'second', warning: null})
		}
		console.log(this.state);
	}

	render() {
		const { game, region, formProgress, warning } = this.state;
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
									onClick={e => this.submitForm(e)}
								>
									Create Ranking
								</Button>
								{warning ? (<WarningText>{warning}</WarningText>) : null}
							</div>
						case 'second':
							return <div>
								<SelectedOptions labels={firstLabels}/>
								<FieldContainer style={{justifyContent: 'flex-start', flexWrap: 'wrap'}}>
									<DateField />
									<TextInput name="title" placeholder="Enter ranking title..." handleChange={this.handleTitleChange} />
								</FieldContainer>
							</div>
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