import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SubHeaderText, NavLink } from './index';

const AlphaNavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	border-top: 1px solid ${({theme}) => theme.palette.primary[0]};
	border-bottom: 1px solid ${({theme}) => theme.palette.primary[0]};
`

const AlphaNavBrowse = styled(NavLink)`
	padding: 0.2rem 0.4rem;
	font-size: 1.4rem;
	font-weight: 900;

	&:hover {
		background-color: ${({theme}) => theme.palette.primary[4]};
	}
`

const theAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const AlphabeticBrowse = (props) => {
	const { match } = props;
	return(
		<div style={{margin: '1rem 0'}}>
			<SubHeaderText>Browse</SubHeaderText>
			<AlphaNavContainer>
				{theAlphabet.map(letter => {
					return(
						<AlphaNavBrowse 
							key={letter}
							to={`${match.url}/${letter.toLowerCase()}`}
						>
							{letter}
						</AlphaNavBrowse>
					)
				})}
			</AlphaNavContainer>
		</div>
	)
}

export default AlphabeticBrowse;

AlphabeticBrowse.propTypes = {
	match: PropTypes.object
}