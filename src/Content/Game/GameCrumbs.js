import React from 'react';
import PropTypes from 'prop-types';
import { BreadCrumbs, StyledActiveNavLink } from '../../style';

const GameCrumbs = (props) => {
	const { gameAlias, regionData, match } = props;
	return(
		<BreadCrumbs>
			<StyledActiveNavLink
				exact
				to={`/${gameAlias}`}
			>
				{gameAlias.toUpperCase()}
			</StyledActiveNavLink>
			{match.params.region && <StyledActiveNavLink
				exact
				to={`/${gameAlias}/${match.params.region}`}
			>
				{regionData[match.params.region] && regionData[match.params.region].region_name}
			</StyledActiveNavLink>}
			{match.params.id && <StyledActiveNavLink
				exact
				to={`/${gameAlias}/${match.params.region}/${match.params.id}`}
			>
				{match.params.id}
			</StyledActiveNavLink>}
		</BreadCrumbs>
	)
}

export default GameCrumbs;

GameCrumbs.propTypes = {
	regionData: PropTypes.object,
	gameAlias: PropTypes.string,
	match: PropTypes.object
}