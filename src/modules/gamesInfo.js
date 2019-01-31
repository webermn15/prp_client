import fetch from 'cross-fetch';

// action declarations
const SET_GAMES = 'SET_GAMES';

// action creators
export const requestStoredGames = () => {
	return async dispatch => {
		try {
			const response = await getGames()

			const body = await response.json()
			if (!response.ok) {
				console.log(response);
			}
			else {
				dispatch(setGames(body))
			}
		}
		catch (e) {
			console.log(e);
		}
	}
}

const getGames = async () => {
	const response = await fetch(`${process.env.API_URL}/api/games/all`, {
		method: 'GET'
	})
	return response;
}

const setGames = data => {
	const { games } = data;
	return {
		type: SET_GAMES,
		games
	}
}

// init state & reducer for this slice
const insertItem = (array, action) => {
  let newArray = array.slice()
  newArray.splice(action.index, 0, action.item)
  return newArray
}

const initGamesInfo = {
	games: ['ultimate']
}

const gamesInfo = (state = initGamesInfo, action) => {
	switch (action.type) {
		case SET_GAMES:
			return insertItem(state.games, state.games.length, action.games)
		default:
			return state;
	}
}

export default gamesInfo;