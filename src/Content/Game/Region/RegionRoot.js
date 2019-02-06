import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RegionRoot = ({ regionAlias, regionData, url }) => {
	return(
		<div>
			<h4>Recent Rankings:</h4>
			<ul>
				{regionData[regionAlias] && regionData[regionAlias].recentRankings.map(ranking => {
					return(
						<li style={{border: '1px solid orange'}} key={ranking.ranking_id}>
							<Link to={`${url}/${ranking.ranking_id}`}><h3>{ranking.ranking_title}</h3></Link>
							<p>{ranking.ranking_detail}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default RegionRoot;

RegionRoot.propTypes = {
	regionAlias: PropTypes.string,
	regionData: PropTypes.object,
	url: PropTypes.string
}