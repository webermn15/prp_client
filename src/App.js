import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from './auth';

import { HeaderContainer } from './Header';
import { HomeContainer } from './Content';
import Callback from './Callback';

const auth = new Auth();

class App extends Component {
	constructor(props) {
		super(props)
	}

	handleAuth = async () => {
		if (/access_token|id_token/.test(location.hash)) {
			const authResponse = await auth.handleAuth()
			this.props.onAuthSuccess(authResponse);
			this.props.history.replace('/');
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
				<main style={{width: "1024px", margin: "0 auto", border: "1px solid blue"}}>
					<Switch>
						<Route exact path="/" render={() => {
							return <HomeContainer />
						}}/>
						<Route path="/callback" render={() => {
							this.handleAuth()
							return <Callback />
						}} />
					</Switch>
				</main>
			</div>
		)
	}
}

export default App;

App.propTypes = {
	onAuthSuccess: PropTypes.func.isRequired,
	onAuthFail: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired
}