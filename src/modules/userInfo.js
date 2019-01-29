const SET_USER = 'SET_USER';

// action creators
export const setUser = (payload) => {
	return {
		type: SET_USER,
		...payload
	}
}


// initial state for this slice, exported reducer
const initUserState = {
	id: null,
	username: ''
}

const userInfo = (state = initUserState, action) => {
	switch (action.type) {
		case SET_USER:
			return Object.assign({}, state, {
				...state,
				id: action.id,
				username: action.username
			});
		default:
			return state;
	}
}

export default userInfo;