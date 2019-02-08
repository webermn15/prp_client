import fetch from 'cross-fetch';

// action declarations
const SET_NEW_RANKINGS = 'SET_NEW_RANKINGS';


// action creators
export const requestNewRankingData = query => {
	return async dispatch => {
		try {
			const response = await getNewRankingData(query);

			const body = await response.json();
			if (!response.ok) {
				console.log('error in requestNewRankingData action creator: ', response);
			}
			else {
				dispatch(setNewRanking(body, query.regionAlias));
			}
		}
		catch (e) {
			console.log(e)
		}
	}
}

const getNewRankingData = async query => {
	const response = await fetch(`${process.env.API_URL}/api/rankings/detail`, {
		method: 'POST',
		body: JSON.stringify(query),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return response;
}

const setNewRanking = (data, region) => {
	return {
		type: SET_NEW_RANKINGS,
		data,
		region
	}
}

// init state & reducer for this slice
const rankings = (state = {}, action) => {
	switch (action.type) {
		case SET_NEW_RANKINGS:
			return Object.assign({}, state, {
				...state,
				[action.region]: action.data
			})
		default:
			return state;
	}
}

export default rankings;