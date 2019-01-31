import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logoutUser } from '../modules/userInfo';
import Header from './Header';

const mapStateToProps = state => {
	const { userInfo } = state;
	return {
		userInfo
	}
}

const mapDispatchToProps = {
	logoutUser
}

const HeaderContainer = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Header))

export default HeaderContainer;