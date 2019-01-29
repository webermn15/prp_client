import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';

import App from './App';

const middleware = applyMiddleware(thunk);
const store = createStore(
  rootReducer,
  compose(
		middleware,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>	
			<App />
		</Router>
	</Provider>, document.getElementById('app')
);