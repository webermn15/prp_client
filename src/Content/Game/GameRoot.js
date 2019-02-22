import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContentHeader, ContentBody, NavLink, HeaderText, SubHeaderText, UnorderedList, ListItem } from '../../style';

import ssbmYoshisHeader from '../../../dist/static/ssbmyoshisheader.jpg';
import ssbuSmashvilleHeader from '../../../dist/static/ssbusmashvilleheader.jpg';

export const RankingTitle = styled.span`
	font-size: 1.6rem;
`
export const RegionTitle = styled.span`
	font-size: 1.2rem;
`

const GameRoot = ({gameData, gameAlias, url}) => {
	return(
		<div>
			<ContentHeader url={gameAlias === 'ssbm' ? ssbmYoshisHeader : ssbuSmashvilleHeader}>
				<div>
					<HeaderText style={{fontSize: '4rem'}}>{gameData[gameAlias] && gameData[gameAlias].gameName}</HeaderText>
				</div>
			</ContentHeader>
			<ContentBody>
				<SubHeaderText>Recently Uploaded Power Rankings</SubHeaderText>
				<UnorderedList>
					{gameData[gameAlias] && gameData[gameAlias].recentlyUploaded.map(ranking => {
						return(
							<ListItem key={ranking.ranking_id}>
								<NavLink to={`${url}/${ranking.region_alias}`} >
									<RegionTitle>{ranking.region_name}</RegionTitle>
								</NavLink>
								<br/>
								<NavLink to={`${url}/${ranking.region_alias}/${ranking.ranking_id}`}>
									<RankingTitle>{ranking.ranking_title}</RankingTitle>
								</NavLink>
							</ListItem>
						)
					})}
				</UnorderedList>
			</ContentBody>
		</div>
	)
}

export default GameRoot;

GameRoot.propTypes = {
	gameData: PropTypes.object,
	gameAlias: PropTypes.string,
	url: PropTypes.string.isRequired
}