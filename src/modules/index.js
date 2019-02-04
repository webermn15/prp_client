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
	},
	gamePage: {
		ssbm: {
			recentUploads: []
		}
	},
	gamesInfo: [
		{
			id: 0,
			alias: '',
			name: ''
		}
	]
}

*/

const rootReducer = combineReducers({
	userInfo,
	gamesInfo,
	gameData
});

export default rootReducer;