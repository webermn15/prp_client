import { connect } from 'react-redux';
import { setUser } from '../modules/userInfo';
import Login from './Login';

const mapStateToProps = (state) => {
	const { userInfo } = state;
	return {
		userInfo
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onUserAuthenticated: (user) => dispatch(setUser(user))
	}
}

const LoginContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)

export default LoginContainer;