import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FieldContainer, FieldTextWrapper, InputWrapper, InputDropInput, InputDropContainer, InputDropSelection } from './formstyles';
import { Button } from '../../../style';
import { formatPropAsKey } from '../../../utils';

export const InputDropInput = styled.input`
	background-color: ${({theme}) => theme.palette.offwhite};
	color: ${({theme}) => theme.palette.primary[1]};
	border: 1px solid ${({theme}) => theme.palette.primary[0]};
	border-radius: 0.2rem;
	height: 1.5rem;
	font-size: 1rem;
`

export const InputDropContainer = styled.ul`
	font-size: 0.9rem;
`

export const InputDropSelection = styled.li`
	background-color: ${({theme}) => theme.palette.offwhite};
	color: ${({theme}) => theme.palette.primary[1]};
	height: 1.3rem;
	padding: 0.2rem;
	border: 1px solid ${({theme}) => theme.palette.primary[0]};
	border-top: none;
	cursor: pointer;

	&.selected {
		background-color: ${({theme}) => theme.palette.focused};
		color: ${({theme}) => theme.palette.offblack};
	}
`

class InputDropdown extends Component {
	constructor(props) {
		super(props)

		this.state = {
			filter: '',
			items: [],
			hoveredRegionId: null,
			selectedRegionId: null,
			focused: false,
			dropSelection: 0
		}
		this.dropdownRef = React.createRef();
		this.inputRef = React.createRef();
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClicks);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClicks);
	}

	handleClicks = e => {
		if (this.dropdownRef.current.contains(e.target)) {
			const selectedRegion = this.state.items[this.state.dropSelection]
			this.setState({filter: selectedRegion.region_name, items: [selectedRegion], selectedRegionId: selectedRegion.region_id, focused: false, dropSelection: 0})
		}
		else if (!this.inputRef.current.isSameNode(e.target) && !this.dropdownRef.current.contains(e.target) && !this.state.selectedRegionId) {
			this.setState({filter: '', items: [], focused: false});
			console.log('handleClicks in dropdown component is being fired...');
		}
	}

	handleKeyDown = e => {
		if (e.key === 'Enter') {
			if (this.state.items.length > 0) {
				const selectedRegion = this.state.items[this.state.dropSelection]
				this.setState({filter: selectedRegion.region_name, items: [selectedRegion], selectedRegionId: selectedRegion.region_id, focused: false, dropSelection: 0})
			}
			e.preventDefault();
		}
		if (e.key === 'Escape') {
			this.setState({filter: '', items: [], focused: false});
		}
		if (e.key === 'ArrowDown' && this.state.items.length > 0) {
			const newInd = this.state.dropSelection === this.state.items.length - 1 ? 0 : (this.state.dropSelection + 1);
			this.setState({hoveredRegionId: this.state.items[newInd].region_id, dropSelection: newInd});
			e.preventDefault();
		}
		else if (e.key === 'ArrowUp' && this.state.items.length > 0) {
			const newInd = this.state.dropSelection === 0 ? this.state.items.length - 1 : (this.state.dropSelection - 1);
			this.setState({hoveredRegionId: this.state.items[newInd].region_id, dropSelection: newInd});
			e.preventDefault();
		}
	}

	handleCursorBrowse = i => {
		this.setState({dropSelection: i, hoveredRegionId: this.state.items[i].region_id});
	}

	handleChange = e => {
		const { regions } = this.props;
		let filtered = [];
		if (e.target.value.length > 0) {
			const regexp = new RegExp(`${e.target.value}`, 'gi');
			filtered = regions.filter(region => region.region_name.match(regexp) || region.region_alias.match(regexp));
		}
		const inputUpdate = formatPropAsKey(e.target.name, e.target.value);
		this.setState({...inputUpdate, items: filtered, dropSelection: 0, focused: true});
	}

	render() {
		const { filter, items, focused } = this.state;
		return(
			<FieldContainer>
				<InputWrapper>
					<label htmlFor="region">Select region:</label>
					<InputDropInput 
						autoComplete="off"
						name="filter" 
						id="region" 
						type="text" 
						placeholder="Search regions..."
						value={this.state.filter}
						ref={this.inputRef}
						onChange={e => this.handleChange(e)}
						onFocus={() => this.setState({focused: true})}
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
										className={this.state.dropSelection === i ? 'selected' : null}
										onMouseOver={() => this.handleCursorBrowse(i)}
									>
										{region.region_name}
									</InputDropSelection>
								)
							}
						)}
					</InputDropContainer>
				</InputWrapper>
				<FieldTextWrapper>
					Region not listed? <Button>Create a new one</Button>
				</FieldTextWrapper>
			</FieldContainer>
		)
	}
}

export default InputDropdown;

InputDropdown.propTypes = {
	regions: PropTypes.array
}