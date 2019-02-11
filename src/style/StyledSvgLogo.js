import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavLink from './NavLink';
import { rotateHalf, rotateHalfReverse } from './animations';

const SvgLogo = ({className}) => {
	return(
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path className={className} d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"/>
		</svg>
	)
}

SvgLogo.propTypes = {
	className: PropTypes.string
}

const StyledSvgLogo = styled(SvgLogo)`
	&.svg-icon {
		fill: ${({theme}) => theme.palette.primary[1]};
		transform-origin: 50% 50%;
		transition: 0.2s fill ease-in-out;
		animation: 0.2s ${rotateHalfReverse} ease-in;

	}
	${NavLink}:hover &,
	${NavLink}:active & {
		fill: ${({theme}) => theme.palette.accent[0]};
		animation: 0.2s ${rotateHalf} ease-in;
		animation-fill-mode: forwards;
	}
`

export default StyledSvgLogo;