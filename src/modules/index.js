import { combineReducers } from 'redux';
import userInfo from './userInfo';
import gamesInfo from './gamesInfo';
import gameData from './gameData';
import regionData from './regionData';
import rankings from './rankings';
import players from './players';

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
	},
	rankings: {
		// gotta reformat this
	},
	players: {
		[player_id]: {
			player_tag: 'name',
			sponsor_prefix: 'prefix',
			rankings: []
		}
	}
}

*/

const rootReducer = combineReducers({
	userInfo,
	gamesInfo,
	gameData,
	regionData,
	rankings,
	players
});

export default rootReducer;