import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PrContainer } from './Pr';
import RegionRoot from './RegionRoot';

class Region extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const { onLoadGetRegion, gameAlias, match } = this.props;
		const regionAlias = match.params.region;
		const jsonQuery = {'regionAlias': regionAlias, 'gameAlias': gameAlias}
		onLoadGetRegion(jsonQuery);
	}
	render() {
		const { regionData, match } = this.props;
		const regionAlias = match.params.region;
		return(
			<div>
				<p>({regionData[regionAlias] && regionData[regionAlias].level} region)</p>
				<Link to={`${match.url}`}>
					<h2>{regionData[regionAlias] && regionData[regionAlias].region_name}</h2>
				</Link>				
				<Switch>
					<Route path={`${match.url}/:id`} render={(props) => <PrContainer {...props} regionAlias={regionAlias} />} />
					<Route path={`${match.url}/`} render={(props) => <RegionRoot {...props} url={match.url} regionAlias={regionAlias} regionData={regionData}/>} />
				</Switch>
			</div>
		)
	}
}

export default Region;

Region.propTypes = {
	regionData: PropTypes.object,
	match: PropTypes.object.isRequired,
	onLoadGetRegion: PropTypes.func.isRequired,
	gameAlias: PropTypes.string.isRequired
}