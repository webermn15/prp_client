import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionMain, NavLink, SubSubHeaderText, TableRow, TableCell, TableCellLast } from '../../../../style';
import styled from 'styled-components';
import { icons } from '../../../../utils';

const IconWrapper = styled.div`
	height: 1rem;
	width: 1rem;
`

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
			<SectionMain>
				<SubSubHeaderText style={{textAlign: 'center'}}>{rankings[regionAlias] && rankings[regionAlias].title}</SubSubHeaderText>
				<table style={{borderCollapse: 'collapse', margin: '0 auto'}}>
					<thead>
						<tr>
							<th>Rank</th>
							<th style={{textAlign: 'left', paddingLeft: '1.6rem'}}>Tag</th>
							<th>Move</th>
							<th>Characters</th>
						</tr>
					</thead>
					<tbody>
						{rankings[regionAlias] && rankings[regionAlias].ranks.map(rank => {
							return(
								<TableRow key={rank.rank}>
									<TableCell>
										{rank.rank}
									</TableCell>
									<TableCell style={{textAlign: 'left'}}>
										<NavLink to={`/players/${rank.player}`}>
											<span>{`${rank.sponsor_prefix == true ? rank.sponsor_prefix + '|' : ''} ${rank.player_tag}`}</span>
										</NavLink>
									</TableCell>
									<TableCell style={{padding: '0 2rem', textAlign: 'center'}}>
										{!!rank.previous_rank === true ? (rank.previous_rank - rank.rank) : '---'}
									</TableCell>
									<TableCellLast>
										{rank.characters.map((char, i) => {
											return(
												<IconWrapper key={rank.rank + i}>
													<img style={{maxHeight: '100%', maxWidth: '100%'}} src={icons(`./neutral${char.image}`)} />
												</IconWrapper>
											)
										})}
									</TableCellLast>
								</TableRow>
							)
						})}
					</tbody>
				</table>
			</SectionMain>
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