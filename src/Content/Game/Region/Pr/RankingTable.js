import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, TableRow, TableCell, TableCellLast } from '../../../../style';
import { icons } from '../../../../utils';

const IconWrapper = styled.div`
	height: 2rem;
	width: 2rem;
`

const RankingTable = ({rankings, regionAlias}) => {
	return(
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
								{!!rank.previous_rank === true ? (rank.previous_rank - rank.rank) : (<span style={{fontSize: '0.6rem'}}>NEW</span>)}
							</TableCell>
							<TableCellLast>
								{rank.characters.map((char, i) => {
									return(
										<IconWrapper key={rank.rank + i}>
											<img style={{maxHeight: '100%', maxWidth: '100%'}} src={icons(`./${char.image}`)} />
										</IconWrapper>
									)
								})}
							</TableCellLast>
						</TableRow>
					)
				})}
			</tbody>
		</table>
	)
}

export default RankingTable;

RankingTable.propTypes = {
	rankings: PropTypes.object,
	regionAlias: PropTypes.string
}