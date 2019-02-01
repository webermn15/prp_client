import { combineReducers } from 'redux';
import userInfo from './userInfo';
import gamesInfo from './gamesInfo';
import gameData from './gameData';

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
	userInfo,
	gamesInfo,
	gameData
});

export default rootReducer;