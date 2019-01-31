// import fetch from 'cross-fetch';

// declare action literals
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAIL = 'AUTH_FAIL';
const LOGOUT_USER = 'LOGOUT_USER';


// action creators
export const authUserSuccess = credentials => {
	const { accessToken, idToken, expiresIn, idTokenPayload } = credentials;
	console.log('authUserSuccess action creator, credentials: ', credentials);
	return {
		type: AUTH_SUCCESS,
		accessToken,
		idToken,
		expiresIn,
		idTokenPayload
	}
}

export const authUserFail = err => {
	console.log('authUserFail action creator: ', err)
	return {
		type: AUTH_FAIL
	}
}

export const logoutUser = () => {
	return {
		type: LOGOUT_USER
	}
}


// initial state for this slice, exported reducer
const initUserState = {
	id: null,
	username: '',
	picture: null,
	accessToken: null,
	idToken: null,
	expiresAt: null,
	authenticated: false,
	error: null
}

const userInfo = (state = initUserState, action) => {
	switch (action.type) {
		case AUTH_SUCCESS:
			return Object.assign({}, state, {
				...state,
				accessToken: action.accessToken,
				idToken: action.idToken,
				expiresAt: action.expiresIn,
				id: action.idTokenPayload.sub,
				username: action.idTokenPayload.nickname,
				picture: action.idTokenPayload.picture,
				authenticated: true
			})
		case AUTH_FAIL:
			return Object.assign({}, state, {
				...state,
				authenticated: false
			})
		case LOGOUT_USER:
			return Object.assign({}, state, {
				...state,
				initUserState
			})
		default:
			return state;
	}
}

export default userInfo;