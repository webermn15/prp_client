import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AlphabeticBrowse, RankingCard, ContentHeader, ContentBody, HeaderText, SubHeaderText, UnorderedList } from '../../style';

import ssbmYoshisHeader from '../../../dist/static/ssbmyoshisheader.jpg';
import ssbuSmashvilleHeader from '../../../dist/static/ssbusmashvilleheader.jpg';

export const RankingTitle = styled.span`
	font-size: 1.6rem;
`
export const RegionTitle = styled.span`
	font-size: 1.2rem;
`

const GameRoot = (props) => {
	const { gameData, gameAlias, url } = props;
	return(
		<div>
			<ContentHeader url={gameAlias === 'ssbm' ? ssbmYoshisHeader : ssbuSmashvilleHeader}>
				<div>
					<HeaderText style={{fontSize: '4rem'}}>{gameData[gameAlias] && gameData[gameAlias].gameName}</HeaderText>
				</div>
			</ContentHeader>
			<ContentBody>
				<AlphabeticBrowse {...props} />
				<SubHeaderText>Recently Uploaded Power Rankings</SubHeaderText>
				<UnorderedList>
					{gameData[gameAlias] && gameData[gameAlias].recentlyUploaded.map(ranking => {
						return(
							<RankingCard key={ranking.ranking_id} url={url} {...ranking} />
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