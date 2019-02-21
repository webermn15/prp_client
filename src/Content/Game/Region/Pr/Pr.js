import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContentHeader, ContentBody, HeaderText, SubHeaderText, SubSubHeaderText, SectionMain } from '../../../../style';

import RankingTable from './RankingTable';

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
		const { rankings, gameAlias, regionAlias, regionData } = this.props;
		return(
			<SectionMain>
				<ContentHeader>
					<div>
						<HeaderText>{regionData[regionAlias] && regionData[regionAlias].region_name}</HeaderText>
						<SubHeaderText>{rankings[regionAlias] && rankings[regionAlias].title}</SubHeaderText>
						<SubSubHeaderText>{gameAlias.toUpperCase()}</SubSubHeaderText>
					</div>
				</ContentHeader>
				<ContentBody>
					<RankingTable
						rankings={rankings}
						regionAlias={regionAlias}
					/>
				</ContentBody>
			</SectionMain>
		)
	}
}

export default Pr;

Pr.propTypes = {
	onLoadGetRankings: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	regionData: PropTypes.object.isRequired,
	regionAlias: PropTypes.string.isRequired,
	gameAlias: PropTypes.string.isRequired,
	rankings: PropTypes.object
}