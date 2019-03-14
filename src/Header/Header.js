import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../style';

// import SiteLogo from '../../dist/static/prplogo.png';

const StyledHeader = styled.header`
	flex-shrink: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px;
	background-color: ${({theme}) => theme.palette.primary[3]};
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
				{
					!authenticated && (
						<Button
							onClick={() => this.handleAuthorization()}
						>
							Login via Auth0
						</Button>
					)
				}
				{
					authenticated && (
						<div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "12rem"}}>
							<div style={{height: "40px", width: "40px"}}>
								<img style={{maxWidth: "100%", borderRadius: "20px"}} src={this.props.userInfo.picture} />
							</div>
							<Button
								onClick={() => this.handleLogout()}
							>
								Logout
							</Button>
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