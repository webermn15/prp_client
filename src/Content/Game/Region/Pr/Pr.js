import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, SubHeaderText } from '../../../../style';

class Pr extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const { onLoadGetRankings, regionAlias, match } = this.props;
		const rankingId = match.params.id;
		const jsonQuery = {'rankingId': rankingId, 'regionAlias': regionAlias}
		onLoadGetRankings(jsonQuery);
	}
	render() {
		const { rankings, regionAlias } = this.props;
		return(
			<div>
				<SubHeaderText>{rankings[regionAlias] && rankings[regionAlias].title}</SubHeaderText>
				<table>
					<tbody>
						{rankings[regionAlias] && rankings[regionAlias].ranks.map(rank => {
							return(
								<tr key={rank.rank}>
									<td style={{padding: '0 2rem', textAlign: 'center'}}>
										{rank.rank}
									</td>
									<td>
										<NavLink to={`/player/${rank.player}`}>
											<div>{`${rank.sponsor_prefix == true ? rank.sponsor_prefix + '|' : ''} ${rank.player_tag}`}</div>
										</NavLink>
									</td>
									<td style={{padding: '0 2rem', textAlign: 'center'}}>
										{!!rank.previous_rank === true ? (rank.previous_rank - rank.rank) : '---'}
									</td>
									<td style={{fontSize: '0.8rem'}}>
										{rank.characters.map(char => {
											return `${char.name} `
										})}
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Pr;

Pr.propTypes = {
	onLoadGetRankings: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	regionAlias: PropTypes.string.isRequired,
	rankings: PropTypes.object
}