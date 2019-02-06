import fetch from 'cross-fetch';

// action declarations
const SET_NEW_PLAYER = 'SET_NEW_PLAYER';


// action creators
export const requestNewPlayerData = query => {
	return async dispatch => {
		try {
			const response = await getNewPlayerData(query);

			const body = await response.json();
			if (!response.ok) {
				console.log('error in requestNewPlayerData action creator: ', response);
			}
			else {
				dispatch(setNewPlayer(body, query.playerId));
			}
		}
		catch (e) {
			console.log(e)
		}
	}
}

const getNewPlayerData = async query => {
	const response = await fetch(`${process.env.API_URL}/api/players/detail`, {
		method: 'POST',
		body: JSON.stringify(query),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return response;
}

const setNewPlayer = (data, id) => {
	return {
		type: SET_NEW_PLAYER,
		data,
		id
	}
}

// init state & reducer for this slice
const players = (state = {}, action) => {
	switch (action.type) {
		case SET_NEW_PLAYER:
			return Object.assign({}, state, {
				...state,
				[action.id]: action.data
			})
		default:
			return state;
	}
}

export default players;