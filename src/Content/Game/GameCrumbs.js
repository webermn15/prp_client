import React from 'react';
import PropTypes from 'prop-types';
import { BreadCrumbs, StyledActiveNavLink } from '../../style';

const GameCrumbs = (props) => {
	const { gameAlias, match } = props;
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
				{match.params.region.charAt(0).toUpperCase() + match.params.region.slice(1)}
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
	gameAlias: PropTypes.string,
	match: PropTypes.object
}