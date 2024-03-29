import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableRow, TableCell, TableCellLast } from '../../../../style';
import { icons } from '../../../../utils';

const IconWrapper = styled.div`
	height: 1.4rem;
	width: 1.4rem;
`

const PreviewRankingTable = ({rankings}) => {
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
				{rankings.map((rank, i) => {
					return(
						<TableRow key={i}>
							<TableCell>
								{i + 1}
							</TableCell>
							<TableCell style={{textAlign: 'left', fontWeight: '700'}}>
								<span>{`${!!rank.sponsor_prefix === true ? rank.sponsor_prefix + ' |' : ''} ${rank.player_tag && rank.player_tag.label}`}</span>
							</TableCell>
							<TableCell style={{padding: '0 2rem', textAlign: 'center'}}>
								{!!rank.previous_rank === true ? (rank.previous_rank - rank.rank) : (<span style={{fontSize: '0.6rem'}}>NEW</span>)}
							</TableCell>
							<TableCellLast>
								{rank.played_characters && rank.played_characters.map((char, i) => {
									return(
										<IconWrapper key={i}>
											<img style={{maxHeight: '100%', maxWidth: '100%'}} src={icons(`./${char.character_image}`)} />
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

export default PreviewRankingTable;

PreviewRankingTable.propTypes = {
	rankings: PropTypes.array
}