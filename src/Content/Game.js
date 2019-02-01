import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Game extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const { getRankingsForGame, location } = this.props;
		const randomJson = {'gameId': location.state.gameId}
		getRankingsForGame(randomJson);
	}
	render() {
		return(
			<div>
				gamé
			</div>
		)
	}
}

export default Game;

Game.propTypes = {
	getRankingsForGame: PropTypes.func.isRequired,
	location: PropTypes.object.isRequired
}