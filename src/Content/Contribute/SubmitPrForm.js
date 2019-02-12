import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatPropAsKey } from '../../utils';

import InputDropdown from './InputDropdown';

export const InputDropWrapper = styled.div`
	width: 10rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: ${({theme}) => theme.palette.primary[0]};
	color: ${({theme}) => theme.palette.offwhite};
	padding: 0.5rem;
	border-radius: 0.3rem;
`

export const InputDropInput = styled.input`
	background-color: ${({theme}) => theme.palette.offwhite};
	color: ${({theme}) => theme.palette.primary[1]};
	border: 1px solid ${({theme}) => theme.palette.primary[2]};
	height: 1.5rem;
	font-size: 1rem;
`

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
		console.log('state in form component: ', this.state);
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
				<InputDropdown/>
				<InputDropWrapper>
					<label htmlFor="date">Select date:</label>
					<InputDropInput name="date" value={this.state.date} onChange={e => this.handleChange(e)}/>
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