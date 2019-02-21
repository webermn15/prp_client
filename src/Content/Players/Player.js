import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContentMain, NavLink, HeaderText, SubHeaderText, UnorderedList, ListItem } from '../../style';

class Player extends Component {
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
			<ContentMain>
				<HeaderText>{players[playerId] && players[playerId].player_tag}</HeaderText>
				<SubHeaderText>Rankings appeared on:</SubHeaderText>
				<UnorderedList>
					{players[playerId] && players[playerId].rankings.map(ranking => {
						return(
							<ListItem key={ranking.ranking_id}>
								<NavLink to={`/${ranking.ranking_game}/${ranking.region_alias}/${ranking.ranking_id}`}>
									<span>{`${ranking.region_name} | ${ranking.ranking_title}`}</span>
								</NavLink>
							</ListItem>
						)
					})}
				</UnorderedList>
			</ContentMain>
		)
	}
}

export default Player;

Player.propTypes = {
	onLoadGetPlayerData: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	players: PropTypes.object
}