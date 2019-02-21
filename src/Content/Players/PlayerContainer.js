import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestNewPlayerData } from '../../modules/players';

import Player from './Player';

const mapStateToProps = state => {
	const { players } = state;
	return {
		players
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoadGetPlayerData: playerId => dispatch(requestNewPlayerData(playerId))
	}
}

const PlayerContainer = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Player))

export default PlayerContainer;