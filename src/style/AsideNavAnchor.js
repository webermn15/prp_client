import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AsideNavAnchor = styled(Link)`
	display: block;
	max-width: 100%;
	font-size: 0.9rem;
	font-weight: 700;
	line-height: 1;
	text-align: left;
	text-decoration: none;
	cursor: pointer;
	padding: 0.7rem 0.2rem;
	margin: 0;
	border: none;
	border-bottom: 1px solid ${({theme}) => theme.palette.primary[0]};
	background-color: ${({theme}) => theme.palette.offwhite};
	color: ${({theme}) => theme.palette.primary[1]};

	&:hover,
	&:active {
		background-color: ${({theme}) => theme.palette.primary[4]};
	}
`

export default AsideNavAnchor;