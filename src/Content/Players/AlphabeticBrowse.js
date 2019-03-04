import React from 'react';
import PropTypes from 'prop-types';
import { SubSubHeaderText, NavLink } from '../../style';

const theAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const AlphabeticBrowse = (props) => {
	const { match } = props;
	return(
		<div>
			<SubSubHeaderText>Browse players:</SubSubHeaderText>
			<div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
				{theAlphabet.map(letter => {
					return(
						<NavLink 
							key={letter}
							to={`${match.url}/${letter.toLowerCase()}`}
						>
							{letter}
						</NavLink>
					)
				})}
			</div>
		</div>
	)
}

export default AlphabeticBrowse;

AlphabeticBrowse.propTypes = {
	match: PropTypes.object
}