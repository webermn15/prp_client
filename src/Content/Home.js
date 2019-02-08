import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, HeaderText, ContentMain } from '../style';

class Home extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<ContentMain style={{textAlign: 'center'}}>
				<HeaderText>Power Rank Project</HeaderText>
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
			</ContentMain>
		)
	}
}

export default Home;

Home.propTypes = {
	gamesInfo: PropTypes.array
}