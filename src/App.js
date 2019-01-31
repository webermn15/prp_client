import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from './auth';

import { LoginContainer } from './LoginSignup';
import Home from './Home';

const auth = new Auth();



class App extends Component {
	constructor(props) {
		super(props)
	}

	handleAuth = async () => {
		if (/access_token|id_token/.test(location.hash)) {
			const authResponse = await auth.handleAuth()
			this.props.onAuthSuccess(authResponse);
		}
		else if (/error/.test(location.hash)) {
			const error = await auth.handleAuth();
			console.log(error)
			this.props.onAuthFail(error);
		}
	}

	render() {
		return(
			<div>
				<Link to="/login">
					Log in to the application via Auth0
				</Link>
				<Switch>
					<Route path="/login" render={(props) => {
						return <LoginContainer auth={auth} {...props} />
					}} />
					<Route path="/home" render={(props) => {
						this.handleAuth()
						return <Home {...props} />
					}} />
				</Switch>
			</div>
		)
	}
}

export default App;

App.propTypes = {
	onAuthSuccess: PropTypes.func.isRequired,
	onAuthFail: PropTypes.func.isRequired
}