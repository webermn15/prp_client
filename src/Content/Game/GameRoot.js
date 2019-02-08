import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, SubHeaderText, UnorderedList, ListItem } from '../../style';

export const RankingTitle = styled.span`
	font-size: 1.6rem;
`
export const RegionTitle = styled.span`
	font-size: 1.2rem;
`
export const RankingDetail = styled.p`
	font-size 0.8rem;
	margin: 0.4rem 0;
`

const GameRoot = ({gameData, gameAlias, url}) => {
	return(
		<div>
			<SubHeaderText>Recently Uploaded Power Rankings</SubHeaderText>
			<UnorderedList>
				{gameData[gameAlias] && gameData[gameAlias].recentlyUploaded.map(ranking => {
					return(
						<ListItem key={ranking.ranking_id}>
							<NavLink to={`${url}/${ranking.region_alias}/${ranking.ranking_id}`}>
								<RankingTitle>{ranking.ranking_title}</RankingTitle>
							</NavLink>
							<br/>
							<NavLink to={`${url}/${ranking.region_alias}`} >
								<RegionTitle>{ranking.region_name}</RegionTitle>
							</NavLink>
							<RankingDetail>{ranking.ranking_detail}</RankingDetail>
						</ListItem>
					)
				})}
			</UnorderedList>
		</div>
	)
}

export default GameRoot;

GameRoot.propTypes = {
	gameData: PropTypes.object,
	gameAlias: PropTypes.string,
	url: PropTypes.string.isRequired
}