import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { authUserSuccess, authUserFail } from './modules/userInfo';
import App from './App';

const mapDispatchToProps = dispatch => {
	return {
		onAuthSuccess: credentials => dispatch(authUserSuccess(credentials)),
		onAuthFail: err => dispatch(authUserFail(err))
	}
}

const AppContainer = withRouter(connect(
	null,
	mapDispatchToProps
)(App))

export default AppContainer;