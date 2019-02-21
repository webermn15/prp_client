import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ContentWrapper, ContentMain } from '../../style';

import GameRoot from './GameRoot';
import GameCrumbs from './GameCrumbs';
import { RegionContainer } from './Region';

class Game extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { getRankingsForGame, match } = this.props;
		const gameAlias = match.params.game;
		const jsonQuery = {'gameAlias': gameAlias}
		getRankingsForGame(jsonQuery);
	}

	render() {
		const { gameData, match } = this.props;
		const gameAlias = match.params.game;
		return(
			<ContentWrapper>
				<Switch>
					<Route path={`${match.url}/:region/:id`} render={(props) => <GameCrumbs {...props} gameAlias={gameAlias} />} />
					<Route path={`${match.url}/:region`} render={(props) => <GameCrumbs {...props} gameAlias={gameAlias} />} />
					<Route path={`${match.url}`} render={(props) => <GameCrumbs {...props} gameAlias={gameAlias}/>} />
				</Switch>
				<ContentMain>
					<Switch>
						<Route path={`${match.url}/:region`} render={(props) => <RegionContainer {...props} gameAlias={gameAlias} />} />
						<Route path={`${match.url}`} render={(props) => <GameRoot {...props} url={match.url} gameAlias={gameAlias} gameData={gameData} />} />
					</Switch>
				</ContentMain>
			</ContentWrapper>
		)
	}
}

export default Game;

Game.propTypes = {
	getRankingsForGame: PropTypes.func.isRequired,
	gameData: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
}