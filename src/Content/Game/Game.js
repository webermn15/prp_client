import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, HeaderText, ContentMain } from '../../style';

import GameRoot from './GameRoot';
import GameAside from './GameAside';
import { RegionContainer } from './Region';

const GameWrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 100%;
`

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
			<GameWrapper>
				<GameAside/>
				<ContentMain>
					<NavLink to={`${match.url}`}>
						<HeaderText>{gameAlias.toUpperCase()}</HeaderText>
					</NavLink>
					<h6 style={{margin: "0.4rem 0"}}>Last updated: {gameData[gameAlias] && gameData[gameAlias].lastUpdated}</h6>
					<Switch>
						<Route path={`${match.url}/:region`} render={(props) => <RegionContainer {...props} gameAlias={gameAlias} />} />
						<Route path={`${match.url}`} render={(props) => <GameRoot {...props} url={match.url} gameAlias={gameAlias} gameData={gameData} />} />
					</Switch>
				</ContentMain>
			</GameWrapper>
		)
	}
}

export default Game;

Game.propTypes = {
	getRankingsForGame: PropTypes.func.isRequired,
	gameData: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
}