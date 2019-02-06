import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Players extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { onLoadGetPlayerData, match } = this.props;
		const playerId = match.params.id;
		const jsonQuery = {'playerId': playerId}
		onLoadGetPlayerData(jsonQuery);
	}

	render() {
		const { match, players } = this.props;
		const playerId = match.params.id;
		return(
			<div>
				<h2>{players[playerId] && players[playerId].player_tag}</h2>
				<h4>Rankings appeared on:</h4>
				<ul>
					{players[playerId] && players[playerId].rankings.map(ranking => {
						return(
							<li key={ranking.ranking_id}>
								<Link to={`/${ranking.ranking_game}/${ranking.region_alias}/${ranking.ranking_id}`}>
									<h3>{`${ranking.region_name} | ${ranking.ranking_title}`}</h3>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default Players;

Players.propTypes = {
	onLoadGetPlayerData: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	players: PropTypes.object
}