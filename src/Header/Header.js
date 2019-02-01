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
		// console.log('header passed props: ', this.props);
		const { authenticated } = this.props.userInfo;
		return(
			<header style={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "20px", border: "1px solid black"}}>
				<Link to="/">
					go home dude
				</Link>
				{
					!authenticated && (
						<button
							onClick={() => this.handleAuthorization()}
						>
							Login via Auth0
						</button>
					)
				}
				{
					authenticated && (
						<div style={{display: "flex", flexDirection: "row"}}>
							<button
								onClick={() => this.handleLogout()}
							>
								Logout from this application
							</button>
							<div>username: {this.props.userInfo.username}</div>
							<div style={{height: "40px", width: "40px"}}>
								<img style={{maxWidth: "100%", borderRadius: "20px"}} src={this.props.userInfo.picture} />
							</div>
						</div>
					)
				}

			</header>
		)
	}
}

export default Header;

Header.propTypes = {
	auth: PropTypes.object.isRequired,
	logoutUser: PropTypes.func.isRequired,
	userInfo: PropTypes.object.isRequired,
	authenticated: PropTypes.bool
}