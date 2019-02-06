import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GameRoot = ({gameData, gameAlias, url}) => {
	return(
		<ul>
			{gameData[gameAlias] && gameData[gameAlias].recentlyUploaded.map(ranking => {
				return(
					<li style={{border: '1px solid orange'}} key={ranking.ranking_id}>
						<Link to={`${url}/${ranking.region_alias}/${ranking.ranking_id}`}><h3>{ranking.ranking_title}</h3></Link>
						<Link to={`${url}/${ranking.region_alias}`} ><h4>{ranking.region_name}</h4></Link>
						<p>{ranking.ranking_detail}</p>
					</li>
				)
			})}
		</ul>
	)
}

export default GameRoot;

GameRoot.propTypes = {
	gameData: PropTypes.object,
	gameAlias: PropTypes.string,
	url: PropTypes.string.isRequired
}