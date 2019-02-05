import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import GameRoot from './GameRoot';
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
			<div>
				<h1>{gameAlias.toUpperCase()} Power Rankings</h1>
				<h6>Last updated: {gameData[gameAlias] && gameData[gameAlias].lastUpdated}</h6>
				<Switch>
					<Route path={`${match.url}/:region`} render={(props) => <RegionContainer {...props} />} />
					<Route path={`${match.url}`} render={(props) => <GameRoot {...props} url={match.url} gameAlias={gameAlias} gameData={gameData} />} />
				</Switch>
			</div>
		)
	}
}

export default Game;

Game.propTypes = {
	getRankingsForGame: PropTypes.func.isRequired,
	gameData: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
}