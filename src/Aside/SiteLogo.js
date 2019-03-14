import React from 'react';
import styled from 'styled-components';
import { NavLink, StyledSvgLogo } from '../style';

const LogoContainer = styled.div`
	margin: 2rem auto;
	height: 4rem;
	width: 4rem;
`

const SiteLogo = () => (
	<LogoContainer>
		<NavLink to='/' >
			<StyledSvgLogo className='svg-logo'/>
		</NavLink>
	</LogoContainer>
)

export default SiteLogo;