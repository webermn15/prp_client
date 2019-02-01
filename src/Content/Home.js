import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
				{
					(this.props.gamesInfo.length > 1) && (
						this.props.gamesInfo.map(game => {
							return <div key={game}><Link to={`/${game}`}>{game}</Link><br/></div>
						})
					)
				}
			</div>
		)
	}
}

export default Home;

Home.propTypes = {
	onLoadGetGames: PropTypes.func.isRequired
}