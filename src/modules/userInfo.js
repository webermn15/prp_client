import fetch from 'cross-fetch';

// declare action literals
const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';


// action creators
export const loginRequest = credentials => {
	return async dispatch => {
		dispatch(loginAttempt())
		try {
			const response = await login(credentials);
			
			const body = await response.json()

			if (!response.ok) {
				dispatch(loginFail(body));
			}
			else {
				dispatch(loginSuccess(body));
			}
		}
		catch (e) {
			console.log(e);
		}
	}
}

const login = async (credentials) => {
	const response = await fetch(`${process.env.API_URL}`+'/api/login', {
		method: 'POST',
		body: JSON.stringify(credentials),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	return response;
}

const loginAttempt = () => {
	return {
		type: LOGIN_ATTEMPT
	}
}

const loginSuccess = ({user}) => {
	const { id, username } = user;
	return {
		type: LOGIN_SUCCESS,
		id,
		username
	}
}

const loginFail = ({err}) => {
	return {
		type: LOGIN_FAIL,
		err
	}
}


// initial state for this slice, exported reducer
const initUserState = {
	id: null,
	username: '',
	accessToken: null,
	idToken: null,
	expiresAt: null,
	authenticating: false,
	authenticated: false,
	error: null
}

const userInfo = (state = initUserState, action) => {
	switch (action.type) {
		case LOGIN_ATTEMPT:
			return Object.assign({}, state, {
				...state,
				authenticating: true
			})
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				...state,
				id: action.id,
				username: action.username,
				authenticating: false,
				authenticated: true
			});
		case LOGIN_FAIL:
			return Object.assign({}, state, {
				...state,
				authenticating: false,
				error: action.err
			})
		default:
			return state;
	}
}

export default userInfo;