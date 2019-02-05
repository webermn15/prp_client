import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestGameRankings } from '../../modules/gameData';
import Game from './Game';

const mapStateToProps = state => {
	const { gameData } = state;
	return {
		gameData
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getRankingsForGame: query => dispatch(requestGameRankings(query))
	}
}

const GameContainer = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Game))

export default GameContainer;