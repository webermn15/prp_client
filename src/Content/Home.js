import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from '../style';
import PropTypes from 'prop-types';

class Home extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div>
				<h1>Power Rank Project</h1>
				<p>There is no centralized place to house power ranks. smashgg kinda, but its a poor implementation and rarely used. i wanna fix that.</p>
				{
					(this.props.gamesInfo.length > 0) && (
						this.props.gamesInfo.map(game => {
							return <div key={game.game_id}>
								<NavLink 
									to={{pathname:`/${game.game_alias}`}}
								>
									{game.game_name}
								</NavLink>
								<br/>
							</div>
						})
					)
				}
			</div>
		)
	}
}

export default Home;

Home.propTypes = {
	gamesInfo: PropTypes.array
}