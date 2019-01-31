import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestStoredGames } from '../modules/gamesInfo';
import Home from './Home';

const mapStateToProps = state => {
	const { gamesInfo } = state;
	return {
		gamesInfo
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoadGetGames: () => dispatch(requestStoredGames())
	}
}

const HomeContainer = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Home))

export default HomeContainer;