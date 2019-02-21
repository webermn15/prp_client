import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ContentMain } from '../../style';

import PlayerRoot from './PlayerRoot';
import PlayerContainer from './PlayerContainer';

const Players = (props) => {
	const { match } = props;
	return(
		<div>
			<ContentMain>
				<Switch>
					<Route path={`${match.url}/:id`} render={(props) => <PlayerContainer {...props} />} />
					<Route path={`${match.url}`} render={(props) => <PlayerRoot {...props} url={match.url} />} />
				</Switch>
			</ContentMain>
		</div>
	)
}

export default Players;

Players.propTypes = {
	match: PropTypes.object.isRequired
}