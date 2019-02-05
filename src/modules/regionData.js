import fetch from 'cross-fetch';

// action declarations
const SET_REGION_DATA = 'SET_REGION_DATA';

// action creators
export const requestRegionData = query => {
	return async dispatch => {
		try {
			const response = await getRegionData(query);

			const body = await response.json();
			if (!response.ok) {
				console.log('error in requestRegionData action creator: ', response);
			}
			else {
				dispatch(setRegionData(body, query.regionAlias));
			}
		}
		catch (e) {
			console.log(e)
		}
	}
}

const getRegionData = async query => {
	const response = await fetch(`${process.env.API_URL}/api/rankings/region`, {
		method: 'POST',
		body: JSON.stringify(query),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return response;
}

const setRegionData = (data, alias) => {
	return {
		type: SET_REGION_DATA,
		data,
		alias
	}
}

// init state & reducer for this slice
const regionData = (state = {}, action) => {
	switch (action.type) {
		case SET_REGION_DATA:
			return Object.assign({}, state, {
				...state,
				[action.alias]: action.data
			})
		default:
			return state;
	}
}

export default regionData;