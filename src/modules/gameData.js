import fetch from 'cross-fetch';

// action declarations
// const GET_GAME_RANKS = 'GET_GAME_RANKS';
// const REQUEST_GAME_RANKS = 'REQUEST_GAME_RANKS';
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
				dispatch(setGameRankings(body));
			}
		}
		catch (e) {
			console.log(e)
		}
	}
}

const getGameRankings = async query => {
	const response = await fetch(`${process.env.API_URL}/api/rankings/region/all`, {
		method: 'POST',
		body: JSON.stringify(query),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return response;
}

const setGameRankings = data => {
	const { ranks } = data;
	console.log(ranks)
	return {
		type: SET_GAME_RANKS,
		ranks
	}
}

// init state & reducer for this slice
const insertItem = (prevState, newItems) => {
  let newArray = prevState.slice()
  for (let i = 0; i < newItems.length; i++) {
		newArray.push(newItems[i])
  }
  return newArray;
}

const gameData = (state = [], action) => {
	switch (action.type) {
		case SET_GAME_RANKS:
			return insertItem(state, action.ranks);
		default:
			return state;
	}
}

export default gameData;