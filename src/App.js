import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from './auth';

import { HeaderContainer } from './Header';
import Home from './Home';

const auth = new Auth();

class App extends Component {
	constructor(props) {
		super(props)
	}

	handleAuth = async () => {
		if (/access_token|id_token/.test(location.hash)) {
			const authResponse = await auth.handleAuth()
			console.log('app handleAuth method, successful: ', authResponse);
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
				<HeaderContainer auth={auth} />
				<Switch>
					<Route exact path="/" render={() => <div>yeet dabdabdabdab</div>}/>
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