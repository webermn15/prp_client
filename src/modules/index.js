import { combineReducers } from 'redux';
import userInfo from './userInfo';

/* * * STATE * * *

{
	userInfo: {
		id: null,
		username: ''
	}
}

*/

const rootReducer = combineReducers({
	userInfo
});

export default rootReducer;