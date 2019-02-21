import React from 'react';
import PropTypes from 'prop-types';
import { ContentHeader, ContentBody, HeaderText, NavLink, UnorderedList, ListItem, SubSubHeaderText } from '../../../style';
import { RankingTitle } from '../GameRoot';

const RegionRoot = ({ regionAlias, regionData, url }) => {
	return(
		<div>
			<ContentHeader>
				<div>
					<HeaderText>{regionData[regionAlias] && regionData[regionAlias].region_name}</HeaderText>
				</div>
			</ContentHeader>
			<ContentBody>
				<SubSubHeaderText>Recent Rankings:</SubSubHeaderText>
				<UnorderedList>
					{regionData[regionAlias] && regionData[regionAlias].recentRankings.map(ranking => {
						return(
							<ListItem key={ranking.ranking_id}>
								<NavLink to={`${url}/${ranking.ranking_id}`}><RankingTitle>{ranking.ranking_title}</RankingTitle></NavLink>
							</ListItem>
						)
					})}
				</UnorderedList>
			</ContentBody>
		</div>
	)
}

export default RegionRoot;

RegionRoot.propTypes = {
	regionAlias: PropTypes.string,
	regionData: PropTypes.object,
	url: PropTypes.string
}