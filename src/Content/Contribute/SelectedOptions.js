import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionsContainer = styled.div`
	height: 2.5rem;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	color: ${({theme}) => theme.palette.offwhite};
	margin-top: 1rem;
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
	margin: 0;
	margin-right: 1rem;
	border-radius: 0.3rem;

	&:focus-within {
		box-shadow: 0 0 0 2px ${({theme}) => theme.palette.focused};
	}
`

const OptionName = styled.div`
	cursor: default;
	padding: 0.4rem 0.5rem;
	border-right: 1px solid ${({theme}) => theme.palette.primary[0]};
`

const OptionAction = styled.button`
	height: 100%;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	color: ${({theme}) => theme.palette.offwhite};
	padding: 0.5rem;
	margin: 0;
	border: none;
	background: none;
	border-radius: 0.3rem;
	transition: all 0.2s ease-in-out;

	&:focus,
	&:hover {
		background-color: ${({theme}) => theme.palette.primary[3]};
		color: ${({theme}) => theme.palette.offblack};
		outline: none;
	}
`

const SelectedOptions = ({labels }) => {
	return(
		<OptionsContainer>
			{labels.map(({label, variable}, i) => {
				return(
					<OptionLabel key={i}>
						<OptionName>{label}</OptionName>
						<OptionAction onClick={() => console.log(`clicked ${label} button for variable ${variable}`)}><span>X</span></OptionAction>
					</OptionLabel>
				)
			})}
		</OptionsContainer>
	)
}

export default SelectedOptions;

SelectedOptions.propTypes = {
	labels: PropTypes.array
	// onClick: PropTypes.func
}