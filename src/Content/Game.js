import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

	componentDidUpdate() {
		// gotta move this update time checking logic elsewhere

		// // if 5 minutes have elapsed, make a new API call to check for newly updated rankings
		// console.log('componentDidUpdate in game component has been hit');
		// const { getRankingsForGame, match, gameData } = this.props;
		// const gameAlias = match.params.game;
		// if (gameData.hasOwnProperty(gameAlias)) {
		// 	const then = new Date(gameData[gameAlias].lastUpdated);
		// 	const now = new Date();
		// 	let timeElapsed = now - then;
		// 	timeElapsed /= 1000;

		// 	console.log('time elapsed in componentDidUpdate: ', timeElapsed);

		// 	if (timeElapsed >= 300) {
		// 		const jsonQuery = {'gameAlias': gameAlias}
		// 		getRankingsForGame(jsonQuery)
		// 	}
		// }
	}

	render() {
		console.log('props in game component: ', this.props);
		const { gameData, match } = this.props;
		const gameAlias = match.params.game;
		return(
			<div>
				<h1>{gameData[gameAlias] && gameData[gameAlias].recentlyUploaded[0].game_name} Power Rankings</h1>
				<h6>Last updated: {gameData[gameAlias] && gameData[gameAlias].lastUpdated}</h6>
				<ul>
					{gameData[gameAlias] && gameData[gameAlias].recentlyUploaded.map(ranking => {
						return <li style={{border: '1px solid orange'}} key={ranking.ranking_id}>
								<Link
									to={`${match.url}/${ranking.ranking_id}`}
								>
									<h4>{ranking.region_name}</h4>
									<p>{ranking.ranking_detail}</p>
								</Link>
							</li>
					})}
				</ul>*
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