import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestRegionData } from '../../../modules/regionData';
import Region from './Region';

const mapStateToProps = state => {
	const { regionData } = state;
	return {
		regionData
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoadGetRegion: query => dispatch(requestRegionData(query))
	}
}

const RegionContainer = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Region))

export default RegionContainer;