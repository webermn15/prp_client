import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Game extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const { getRankingsForGame, match } = this.props;
		const jsonQuery = {'gameAlias': match.params.game}
		getRankingsForGame(jsonQuery);
	}
	render() {
		console.log('props in game component: ', this.props);
		const { gameData, match } = this.props;
		const uppercaseAlias = match.params.game.toUpperCase()
		return(
			<div>
				<h1>{uppercaseAlias} Power Rankings</h1>
				<ul>
					{gameData.map(ranking => {
						return <li style={{border: '1px solid orange'}} key={ranking.id}>
								<Link
									to={`${match.url}/${ranking.id}`}
								>
									<h4>{ranking.name}</h4>
									<p>{ranking.detail}</p>
								</Link>
							</li>
					})}
				</ul>
			</div>
		)
	}
}

export default Game;

Game.propTypes = {
	getRankingsForGame: PropTypes.func.isRequired,
	gameData: PropTypes.array,
	match: PropTypes.object.isRequired
}