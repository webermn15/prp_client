import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, UnorderedList, ListItem, SubSubHeaderText } from '../../../style';
import { RankingTitle, RankingDetail } from '../GameRoot';

const RegionRoot = ({ regionAlias, regionData, url }) => {
	return(
		<div>
			<SubSubHeaderText>Recent Rankings:</SubSubHeaderText>
			<UnorderedList>
				{regionData[regionAlias] && regionData[regionAlias].recentRankings.map(ranking => {
					return(
						<ListItem key={ranking.ranking_id}>
							<NavLink to={`${url}/${ranking.ranking_id}`}><RankingTitle>{ranking.ranking_title}</RankingTitle></NavLink>
							<RankingDetail>{ranking.ranking_detail}</RankingDetail>
						</ListItem>
					)
				})}
			</UnorderedList>
		</div>
	)
}

export default RegionRoot;

RegionRoot.propTypes = {
	regionAlias: PropTypes.string,
	regionData: PropTypes.object,
	url: PropTypes.string
}