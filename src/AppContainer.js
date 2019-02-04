import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { authUserSuccess, authUserFail } from './modules/userInfo';
import { requestStoredGames } from './modules/gamesInfo';
import App from './App';

const mapDispatchToProps = dispatch => {
	return {
		onAuthSuccess: credentials => dispatch(authUserSuccess(credentials)),
		onAuthFail: err => dispatch(authUserFail(err)),
		onLoadGetGames: () => dispatch(requestStoredGames())
	}
}

const AppContainer = withRouter(connect(
	null,
	mapDispatchToProps
)(App))

export default AppContainer;