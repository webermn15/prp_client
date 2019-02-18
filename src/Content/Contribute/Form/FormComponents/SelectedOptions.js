import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: wrap;
	color: ${({theme}) => theme.palette.offwhite};
	margin-bottom: 1rem;
	border-radius: 0.3rem;
`

const OptionLabel = styled.div`
	height: 100%;
	font-size: 0.8rem;
	line-height: 1;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${({theme}) => theme.palette.primary[1]};
	margin-top: 1rem;
	margin-right: 1rem;
	border-radius: 0.3rem;

	&:focus-within {
		box-shadow: 0 0 0 2px ${({theme}) => theme.palette.focused};
	}
`

const OptionName = styled.div`
	cursor: default;
	padding: 0.7rem 0.9rem;
	border-right: 1px solid ${({theme}) => theme.palette.primary[0]};
`

const OptionAction = styled.button`
	height: 100%;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	color: ${({theme}) => theme.palette.offwhite};
	padding: 0.7rem;
	margin: 0;
	border: none;
	background: none;
	border-radius: 0 0.3rem 0.3rem 0;
	transition: all 0.2s ease-in-out;

	&:focus,
	&:hover {
		background-color: ${({theme}) => theme.palette.primary[3]};
		color: ${({theme}) => theme.palette.offblack};
		outline: none;
	}
`

const SelectedOptions = ({formData, handleClick}) => {
	const { formProgress, game, region, date, title } = formData;
	const dateString = date.toDateString().split(' ').slice(1).join(' ');
	let labelss;
	if (formProgress === 'second') {
		labelss = [{variable: 'game', label: game.label, form: 'first'}, {variable: 'region', label: region.label, form: 'first'}];
	}
	else if (formProgress === 'third') {
		labelss = [{variable: 'game', label: game.label, form: 'first'}, {variable: 'region', label: region.label, form: 'first'}, {variable: 'date', label: dateString, form: 'second'}, {variable: 'title', label: title, form: 'second'}];
	}
	return(
		<OptionsContainer>
			{labelss.map(({label, variable, form}, i) => {
				return(
					<OptionLabel key={i}>
						<OptionName>{label}</OptionName>
						<OptionAction onClick={() => handleClick(variable, form)}><span>X</span></OptionAction>
					</OptionLabel>
				)
			})}
		</OptionsContainer>
	)
}

export default SelectedOptions;

SelectedOptions.propTypes = {
	formData: PropTypes.object,
	handleClick: PropTypes.func
}