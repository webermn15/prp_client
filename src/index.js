import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './style';
import AppContainer from './AppContainer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
		composeEnhancers(
			applyMiddleware(thunk),
		)
);

ReactDOM.render(
	<Router>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<GlobalStyle />
				<AppContainer />
			</Provider>
		</ThemeProvider>
	</Router>, document.getElementById('app')
);