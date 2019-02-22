import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, NavLink } from '../../style';

const PlayerSearchResults = ({results}) => {
	console.log(results);
	return(
		<div>
			{results && results.map(result => {
				return(
					<ListItem key={result.player_id}>
						<NavLink to={`players/${result.player_id}`} >
							<div>{result.player_tag}</div>
						</NavLink>
					</ListItem>
				)
			})}
		</div>
	)
}

export default PlayerSearchResults;

PlayerSearchResults.propTypes = {
	results: PropTypes.array
}