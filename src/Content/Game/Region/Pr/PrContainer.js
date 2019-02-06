import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestNewRankingData } from '../../../../modules/rankings';

import Pr from './Pr';

const mapStateToProps = state => {
	const { rankings } = state;
	return {
		rankings
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoadGetRankings: rankingId => dispatch(requestNewRankingData(rankingId))
	}
}

const PrContainer = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Pr))

export default PrContainer;