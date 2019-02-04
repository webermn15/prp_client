import fetch from 'cross-fetch';

// action declarations
const SET_GAME_RANKS = 'SET_GAME_RANKS';

// action creators
export const requestGameRankings = query => {
	return async dispatch => {
		try {
			const response = await getGameRankings(query);

			const body = await response.json();
			if (!response.ok) {
				console.log('error in requestGameRankings action creator: ', response);
			}
			else {
				dispatch(setGameRankings(body, query.gameAlias));
			}
		}
		catch (e) {
			console.log(e)
		}
	}
}

const getGameRankings = async query => {
	const response = await fetch(`${process.env.API_URL}/api/rankings/recent`, {
		method: 'POST',
		body: JSON.stringify(query),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return response;
}

const setGameRankings = (data, alias) => {
	console.log('setGameRankings action creator data: ', data);
	return {
		type: SET_GAME_RANKS,
		data,
		alias
	}
}

// init state & reducer for this slice
const gameData = (state = {}, action) => {
	switch (action.type) {
		case SET_GAME_RANKS:
			return Object.assign({}, state, {
				...state,
				[action.alias]: action.data
			})
		default:
			return state;
	}
}

export default gameData;