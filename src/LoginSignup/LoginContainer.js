import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { loginRequest } from '../modules/userInfo';
import Login from './Login';

const mapStateToProps = state => {
	const { userInfo } = state;
	return {
		userInfo
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoginRequest: credentials => dispatch(loginRequest(credentials))
	}
}

const LoginContainer = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Login))

export default LoginContainer;