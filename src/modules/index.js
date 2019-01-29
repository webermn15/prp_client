import { combineReducers } from 'redux';
import userInfo from './userInfo';

/* * * STATE * * *

{
	userInfo: {
		id: null,
		username: '',
		accessToken: null,
		idToken: null,
		expiresAt: null,
		authenticating: false,
		authenticated: false,
		error: null
	}
}

*/

const rootReducer = combineReducers({
	userInfo
});

export default rootReducer;