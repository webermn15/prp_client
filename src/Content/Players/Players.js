import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ContentWrapper, ContentMain } from '../../style';

import PlayerRoot from './PlayerRoot';
import PlayerContainer from './PlayerContainer';

const Players = (props) => {
	const { match } = props;
	return(
		<ContentWrapper style={{paddingTop: '1rem'}}>
			<ContentMain>
				<Switch>
					<Route path={`${match.url}/:id([0-9])`} render={(props) => <PlayerContainer {...props} />} />
					<Route path={`${match.url}`} render={(props) => <PlayerRoot {...props} url={match.url} />} />
				</Switch>
			</ContentMain>
		</ContentWrapper>
	)
}

export default Players;

Players.propTypes = {
	match: PropTypes.object.isRequired
}