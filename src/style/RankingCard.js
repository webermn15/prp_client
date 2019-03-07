import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, NavLink } from './index';

const RankingCard = ({url, region_name, region_alias, ranking_id, ranking_title, published}) => {
	const date = published && new Date(published);
	return(
		<ListItem>
			<NavLink
				style={{fontSize: '2rem', fontWeight: '900'}}
				to={`${url}/${region_alias}/${ranking_id}`}
			>
				<span>{ranking_title}</span>
			</NavLink>
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
				<NavLink
					style={{fontWeight: '700'}}
					to={`${url}/${region_alias}`}
				>
					<span>{region_name}</span>
				</NavLink>
				<span style={{fontSize: '0.8rem', margin: '0 0.6rem', fontStyle: 'italic'}}>
					{published && date.toDateString().split(' ').slice(1).join(' ')}
				</span>
			</div>
		</ListItem>
	)
}

export default RankingCard;

RankingCard.propTypes = {
	url: PropTypes.string,
	game_name: PropTypes.string,
	region_name: PropTypes.string,
	region_alias: PropTypes.string,
	ranking_id: PropTypes.number,
	ranking_title: PropTypes.string,
	published: PropTypes.string
}