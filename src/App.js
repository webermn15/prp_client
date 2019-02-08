import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from './auth';
import styled from 'styled-components';

import { HeaderContainer } from './Header';
import { HomeContainer, GameContainer, PlayerContainer } from './Content';
import Callback from './Callback';

const auth = new Auth();


// styled components
const AppRoot = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`

const Main = styled.main`
	flex-grow: 1;
	margin 0 auto;
	width: 1024px;
	overflow: auto;
	background-color: ${({theme}) => theme.palette.offwhite};
	border-radius: 0.6rem;
`

class App extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { onLoadGetGames } = this.props;
		onLoadGetGames();
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
			<AppRoot>
				<HeaderContainer auth={auth} />
				<Main>
					<Switch>
						<Route exact path="/" render={() => {
							return <HomeContainer />
						}} />
						<Route path="/callback" render={() => {
							this.handleAuth()
							return <Callback />
						}} />
						<Route path="/player/:id" render={props => {
							return <PlayerContainer {...props} />
						}} />
						<Route path="/:game" render={props => {
							return <GameContainer {...props} />
						}} />
					</Switch>
				</Main>
			</AppRoot>
		)
	}
}

export default App;

App.propTypes = {
	onAuthSuccess: PropTypes.func.isRequired,
	onAuthFail: PropTypes.func.isRequired,
	onLoadGetGames: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired
}