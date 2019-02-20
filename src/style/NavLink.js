import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
	font-weight: 700;
	font-size: 1.2rem;
	text-decoration: none;
	color: ${({theme}) => theme.palette.primary[1]};
	transition: 0.2s color ease-in-out;

	&:hover, &:focus {
		color: ${({theme}) => theme.palette.accent[0]};
	}
`;

export default NavLink;