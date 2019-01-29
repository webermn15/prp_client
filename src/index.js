import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';

import App from './App';

const store = createStore(
  rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<Router>	
			<App />
		</Router>
	</Provider>, document.getElementById('app')
);