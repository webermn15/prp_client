import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.props.onLoadGetGames();
	}

	render() {
		console.log('props in home component: ', this.props);
		return(
			<div>
				<h1>Power Rank Project</h1>
				<p>There is no centralized place to house power ranks. smashgg kinda, but its a poor implementation and rarely used. i wanna fix that.</p>

			</div>
		)
	}
}

export default Home;