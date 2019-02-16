import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionMain, SubSubHeaderText} from '../../../../style';

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
		const { rankings, regionAlias } = this.props;
		return(
			<SectionMain>
				<SubSubHeaderText style={{textAlign: 'center'}}>{rankings[regionAlias] && rankings[regionAlias].title}</SubSubHeaderText>
				<RankingTable
					rankings={rankings}
					regionAlias={regionAlias}
				/>
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