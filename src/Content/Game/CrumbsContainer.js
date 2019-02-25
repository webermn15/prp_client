import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GameCrumbs from './GameCrumbs';

const mapStateToProps = state => {
	const { regionData } = state;
	return {
		regionData
	}
}

const CrumbsContainer = withRouter(connect(
	mapStateToProps
)(GameCrumbs))

export default CrumbsContainer;