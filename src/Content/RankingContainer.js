import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Ranking from './Ranking';

const mapStateToProps = state => {
	return {
		state
	}
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		getRankingsForGame: query => dispatch(requestGameRankings(query))
// 	}
// }

const RankingContainer = withRouter(connect(
	mapStateToProps
)(Ranking))

export default RankingContainer;