import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SectionMain } from '../../../style'

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
		const { regionData, gameAlias, match } = this.props;
		const regionAlias = match.params.region;
		return(
			<SectionMain>
				<Switch>
					<Route path={`${match.url}/:id`} render={(props) => <PrContainer {...props} regionData={regionData} regionAlias={regionAlias} gameAlias={gameAlias} />} />
					<Route path={`${match.url}/`} render={(props) => <RegionRoot {...props} url={match.url} regionAlias={regionAlias} regionData={regionData}/>} />
				</Switch>
			</SectionMain>
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