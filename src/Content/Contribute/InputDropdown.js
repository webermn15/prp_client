import React, { Component } from 'react';
import styled from 'styled-components';
import { formatPropAsKey } from '../../utils';
import { InputDropWrapper, InputDropInput } from './SubmitPrForm';

const InputDropContainer = styled.ul`
	font-size: 0.9rem;
`

const InputDropSelection = styled.li`
	background-color: ${({theme}) => theme.palette.offwhite};
	color: ${({theme}) => theme.palette.primary[1]};
	height: 1.3rem;
	padding: 0.2rem;
	border: 1px solid ${({theme}) => theme.palette.primary[2]};
	border-top: none;
	cursor: pointer;

	&.selected {
		background-color: ${({theme}) => theme.palette.focused};
		color: ${({theme}) => theme.palette.offblack};
	}
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
			selectedRegionId: null,
			focused: false,
			arrowCursor: 0
		}
		this.dropdownRef = React.createRef();
	}

	componentDidMount() {
		document.addEventListener('click', this.handleDropClicks);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleDropClicks);
	}

	handleDropClicks = e => {
		if (this.state.focused && this.dropdownRef.current.contains(e.target)) {
			this.setState({focused: false});
		}
	}

	handleKeyDown = e => {
		if (e.key === 'Enter') {
			e.target.blur();
		}
		if (e.key === 'Escape') {
			this.setState({selectedRegionId: null});
			e.target.blur();
		}
		if (e.key === 'ArrowDown') {
			const newInd = this.state.arrowCursor === this.state.items.length - 1 ? 0 : (this.state.arrowCursor + 1)
			this.setState({selectedRegionId: this.state.items[newInd].region_id, arrowCursor: newInd})
			e.preventDefault();
		}
		else if (e.key === 'ArrowUp') {
			const newInd = this.state.arrowCursor === 0 ? this.state.items.length - 1 : (this.state.arrowCursor - 1)
			this.setState({selectedRegionId: this.state.items[newInd].region_id, arrowCursor: newInd})
			e.preventDefault();
		}
	}

	handleCursorBrowse = i => {
		this.setState({arrowCursor: i, selectedRegionId: this.state.items[i].region_id});
	}

	handleBlur = () => {
		if (this.state.selectedRegionId && this.state.items.length > 0) {
			const selectedRegion = this.state.items[this.state.arrowCursor]
			this.setState({filter: selectedRegion.region_name, items: [selectedRegion], focused: false, arrowCursor: 0})
		}
		else {
			this.setState({filter: '', items: [], focused: false});
		}
	}

	handleChange = e => {
		let filtered = [];
		if (e.target.value.length > 0) {
			const regexp = new RegExp(`${e.target.value}`, 'gi');
			filtered = regions.filter(region => region.region_name.match(regexp) || region.region_alias.match(regexp));
		}
		const inputUpdate = formatPropAsKey(e.target.name, e.target.value);
		this.setState({...inputUpdate, items: filtered, arrowCursor: 0});
	}

	render() {
		const { filter, items, focused } = this.state;
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
					onFocus={() => this.setState({focused: true})}
					onBlur={() => this.handleBlur()}
					onKeyDown={e => this.handleKeyDown(e)}
				/>
				<InputDropContainer 
					style={{display: focused ? 'block' : 'none'}}
					ref={this.dropdownRef}
				>
					{filter.length > 0 && items.length === 0 ?
						(
							<InputDropSelection style={{cursor: 'default'}}>No results found!</InputDropSelection>
						)
					: 
						items.map((region, i) => {
							return(
								<InputDropSelection 
									key={region.region_id}
									className={this.state.arrowCursor === i ? 'selected' : null}
									onMouseOver={() => this.handleCursorBrowse(i)}
								>
									{region.region_name}
								</InputDropSelection>
							)
						}
					)}
				</InputDropContainer>
			</InputDropWrapper>
		)
	}
}

export default InputDropdown;