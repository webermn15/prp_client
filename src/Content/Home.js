import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HeaderText, ContentMain } from '../style';

class Home extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<ContentMain>
				<HeaderText>Power Rank Project</HeaderText>
				<p>There is no centralized place to house power ranks. smashgg kinda, but its a poor implementation and rarely used. I wanna fix that.</p>
			</ContentMain>
		)
	}
}

export default Home;

Home.propTypes = {
	gamesInfo: PropTypes.array
}