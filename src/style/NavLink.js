import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
	text-decoration: 'none';
	color: ${({theme}) => theme.palette.primary[1]};

	&:hover {
		color: ${({theme}) => theme.palette.accent};
	}
`;

export default NavLink;