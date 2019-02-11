import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active';

const StyledActiveNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
	margin-left: 2rem;
	padding-right: 0.4rem;
	font-size: 0.9rem;
	text-decoration: none;
	color: ${({theme}) => theme.palette.primary[1]};
	border-bottom: 1px dotted ${({theme}) => theme.palette.primary[1]};
	transition: 0.2s color ease-in-out;

	&::before {
		content: '»';
		position: relative;
		top: 0;
		left: -1.1rem;
		border-bottom: none;
	}

  &.${activeClassName} {
    border-bottom: 1px solid ${({theme}) => theme.palette.accent[0]};
    color: ${({theme}) => theme.palette.accent[0]};
  }

	&:hover, &:focus {
    border-bottom: 1px solid ${({theme}) => theme.palette.accent[0]};
		color: ${({theme}) => theme.palette.accent[0]};
	}
`

export default StyledActiveNavLink;