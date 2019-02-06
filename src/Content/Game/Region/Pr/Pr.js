import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
				<ul>
					{rankings[regionAlias] && rankings[regionAlias].map(rank => {
						return(
							<li style={{display: 'flex'}} key={rank.rank}>
								<div style={{paddingRight: '20px'}}>{rank.rank}</div>
								<Link to={`/player/${rank.player}`}>
									<div>{`${rank.sponsor_prefix == true ? rank.sponsor_prefix + '|' : ''} ${rank.player_tag}`}</div>
								</Link>
							</li>
						)
					})}
				</ul>
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