import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, SubHeaderText, UnorderedList, ListItem } from '../../../../style';

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
				<UnorderedList>
					{rankings[regionAlias] && rankings[regionAlias].ranks.map(rank => {
						return(
							<ListItem style={{display: 'flex'}} key={rank.rank}>
								<div style={{paddingRight: '20px', width: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}><div style={{margin: '0 auto'}}>{rank.rank}</div></div>
								<NavLink to={`/player/${rank.player}`}>
									<div>{`${rank.sponsor_prefix == true ? rank.sponsor_prefix + '|' : ''} ${rank.player_tag}`}</div>
								</NavLink>
							</ListItem>
						)
					})}
				</UnorderedList>
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