import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch } from 'react-router-dom';

import { LoginContainer } from './LoginSignup';
import Home from './Home';

const App = () => (
	<div>
		<Link to="/login">
			I Dab On Haters
		</Link>
		<Switch>
			<Route path="/login" component={LoginContainer} />
			<Route path="/home" component={Home} />
		</Switch>
	</div>
)

export default hot(module)(App);