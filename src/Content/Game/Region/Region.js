import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Pr } from './Pr';
import RegionRoot from './RegionRoot';

class Region extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const { onLoadGetRegion, match } = this.props;
		const regionAlias = match.params.region;
		const jsonQuery = {'regionAlias': regionAlias, 'gameAlias': 'ssbm'}
		onLoadGetRegion(jsonQuery);
	}
	render() {
		const { regionData, match } = this.props;
		const regionAlias = match.params.region;
		return(
			<div>
				<Switch>
					<Route path={`${match.url}/pr/:date`} render={(props) => <Pr {...props} />} />
					<Route path={`${match.url}`} render={(props) => <RegionRoot {...props} url={match.url} regionAlias={regionAlias} regionData={regionData}/>} />
				</Switch>
			</div>
		)
	}
}

export default Region;

Region.propTypes = {
	regionData: PropTypes.object,
	match: PropTypes.object.isRequired,
	onLoadGetRegion: PropTypes.func.isRequired
}