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

const middleware = applyMiddleware(thunk);
const store = createStore(
  rootReducer,
  compose(
		middleware,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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