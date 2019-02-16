import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SvgArrow = ({className}) => {
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<path fill="none" d="M0 0h24v24H0V0z"/><path className={className} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.35 12.65l-2.79-2.79c-.32-.32-.1-.86.35-.86h5.59c.45 0 .67.54.35.85l-2.79 2.79c-.2.2-.52.2-.71.01z"/>
		</svg>
	)
}

const SvgCancel = ({className}) => {
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<path className={className} d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/><path d="M0 0h24v24H0z" fill="none"/>
		</svg>
	)
}

const SvgAdd = ({className}) => {
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<path className={className} d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
		</svg>
	)
}

const SvgWarningSymbol = ({className}) => {
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none"/><path className={className} d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
		</svg>
	)
}

export const SvgButtonContainer = styled.button`
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background: none;
	border: none;
	margin: 0;
	padding: 2px;
	border-radius: 2rem;

	&:focus,
	&:hover {
		outline: none;
		box-shadow: 0 0 0 2px ${({theme}) => theme.palette.focused};
	}
`

export const WarningIcon = styled(SvgWarningSymbol)`
	&.svg-icon {
		fill: ${({theme}) => theme.palette.focused};
	}
`

export const ArrowUp = styled(SvgArrow)`
	&.svg-icon {
		fill: ${({theme}) => theme.palette.offwhite};
		transform-origin: 50% 50%;
		transform: rotate(180deg);
	}
	${SvgButtonContainer}:hover & {
		fill: ${({theme}) => theme.palette.positive};
	}
`

export const ArrowDown = styled(SvgArrow)`
	&.svg-icon {
		fill: ${({theme}) => theme.palette.offwhite};
	}
	${SvgButtonContainer}:hover & {
		fill: ${({theme}) => theme.palette.negative};
	}
`

SvgArrow.propTypes = {
	className: PropTypes.string
}

SvgCancel.propTypes = {
	className: PropTypes.string
}

SvgAdd.propTypes = {
	className: PropTypes.string
}

SvgWarningSymbol.propTypes = {
	className: PropTypes.string
}
