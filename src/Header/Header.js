import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from '../style';

const StyledHeader = styled.header`
	flex-shrink: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px;
	background-color: ${({theme}) => theme.palette.background_base};
`

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
		const { authenticated } = this.props.userInfo;
		return(
			<StyledHeader>
				<NavLink style={{fontSize: '1rem'}} to="/">
					Home
				</NavLink>
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

			</StyledHeader>
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