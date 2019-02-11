import React, { Component } from 'react';
import styled from 'styled-components';
import { formatPropAsKey } from '../../utils';
import { InputDropWrapper, InputDropInput } from './SubmitPrForm';

const InputDropSelection = styled.li`
	background-color: ${({theme}) => theme.palette.primary[3]};
	color: ${({theme}) => theme.palette.primary[1]};
	height: 1.3rem;
	font-size: 0.9rem;
	padding: 0.2rem;
	border: 1px solid ${({theme}) => theme.palette.primary[1]};
	border-top: none;
	cursor: pointer;
`

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

class InputDropdown extends Component {
	constructor(props) {
		super(props)

		this.state = {
			filter: '',
			items: [],
			selectedRegion: 0
		}
	}
	handleSelectRegion = (e) => {
		this.setState({selectedRegion: e.target.getAttribute('data-region-id'), items: [], filter: e.target.innerHTML});
	}
	handleChange = e => {
		console.log(e.target.value.length);
		let filtered = []
		if (e.target.value.length > 0) {
			const regexp = new RegExp(`${e.target.value}`, 'gi');
			filtered = regions.filter(region => region.region_name.match(regexp) || region.region_alias.match(regexp))
		}
		const inputUpdate = formatPropAsKey(e.target.name, e.target.value);
		this.setState({...inputUpdate, items: filtered});
	}
	render() {
		const { filter, items } = this.state;
		console.log('inputdrop state: ', this.state);
		return(
			<InputDropWrapper>
				<label htmlFor="region">Select region:</label>
				<InputDropInput 
					autoComplete="off"
					name="filter" 
					id="region" 
					type="text" 
					placeholder="Search regions..."
					value={this.state.filter}
					onChange={e => this.handleChange(e)}
				/>
				<ul>
					{filter.length > 0 && items.length === 0 ?
						(
							<InputDropSelection>No results found!</InputDropSelection>
						)
					: 
						items.map(region => {
							return(
								<InputDropSelection 
									key={region.region_id}
									data-region-id={region.region_id}
									onClick={e => this.handleSelectRegion(e)}
								>
									{region.region_name}
								</InputDropSelection>
							)
						}
					)}
				</ul>
			</InputDropWrapper>
		)
	}
}

export default InputDropdown;