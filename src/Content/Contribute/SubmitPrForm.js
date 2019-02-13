import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputDropWrapper } from './formstyles'
import { formatPropAsKey } from '../../utils';

import InputDropdown from './InputDropdown';
import DateField from './DateField';

const regions = [
	{
		region_id: 1,
		region_name: 'Chicago',
		region_alias: 'chicago'
	},
	{
		region_id: 2,
		region_name: 'Southern California',
		region_alias: 'socal'
	},
	{
		region_id: 3,
		region_name: 'New England',
		region_alias: 'new-england'
	},
	{
		region_id: 4,
		region_name: 'South Florida',
		region_alias: 'sfl'
	}
]

class SubmitPrForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			game: '',
			region: '',
			date: undefined,
			ranks: []
		}
	}

	handleChange = e => {
		this.setState(formatPropAsKey(e.target.name, e.target.value));
	}

	submitForm = e => {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		const { gamesInfo } = this.props;
		return(
			<form style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}} onSubmit={e => this.submitForm(e)}>
				<InputDropWrapper>
					<label htmlFor="game">Select game:</label>
					<select name="game" onChange={e => this.handleChange(e)}>

						<option value={''}>Select game</option>
						{gamesInfo && gamesInfo.map(game => {
							return(
								<option key={game.game_id} value={game.game_id}>{game.game_name}</option>
							)})
						}
					</select>
				</InputDropWrapper>
				<InputDropdown regions={regions} />
				<InputDropWrapper>
					<label htmlFor="date">Select date:</label>
					<DateField />
				</InputDropWrapper>
				<button>Submit</button>
			</form>
		)
	}
}

export default SubmitPrForm;

SubmitPrForm.propTypes = {
	gamesInfo: PropTypes.array
}