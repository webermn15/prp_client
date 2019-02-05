import { combineReducers } from 'redux';
import userInfo from './userInfo';
import gamesInfo from './gamesInfo';
import gameData from './gameData';
import regionData from './regionData';

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
			recentUploads: [],
			lastUpdated: date object
		}
	},
	gamesInfo: [
		{
			id: 0,
			alias: '',
			name: ''
		}
	],
	regionData: {
		chicago: {
			region_id: 1,
			region_name: 'Chicago',
			region_alias: 'chicago',
			level: 'local',
			region_image: null
		}
	}
}

*/

const rootReducer = combineReducers({
	userInfo,
	gamesInfo,
	gameData,
	regionData
});

export default rootReducer;