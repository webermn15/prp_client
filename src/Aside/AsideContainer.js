import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AsideNav from './AsideNav';

const mapStateToProps = state => {
	const { gamesInfo } = state;
	return {
		gamesInfo
	}
}

const AsideContainer = withRouter(connect(
	mapStateToProps
)(AsideNav))

export default AsideContainer;