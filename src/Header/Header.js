import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
	constructor(props) {
		super(props)
	}
	handleAuthorization = () => {
		const { auth, logoutUser } = this.props;
		auth.login();
		logoutUser();
	}
	handleLogout = () => {
		const { auth } = this.props;
		auth.logout();
	}
	render() {
		console.log('header passed props: ', this.props);
		return(
			<div style={{display: "flex", flexDirection: "column", padding: "20px", width: "200px"}}>
				<Link to="/">
					go home dude
				</Link>
				<button
					onClick={() => this.handleAuthorization()}
				>
					Login via Auth0
				</button>
				<button
					onClick={() => this.handleLogout()}
				>
					Logout from this application
				</button>
			</div>
		)
	}
}

export default Header;

Header.propTypes = {
	auth: PropTypes.object.isRequired,
	logoutUser: PropTypes.func.isRequired
}