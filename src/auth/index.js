import Promise from 'bluebird';
import auth0 from 'auth0-js';
import { auth0Config } from './auth0config';

const { domain, clientId, callbackUrl } = auth0Config;

class Auth {
	constructor() {
		this.auth0 = new auth0.WebAuth({
			domain: domain,
			clientID: clientId,
			redirectUri: callbackUrl,
			responseType: 'token id_token',
			scope: 'openid profile'
		});
	}

	login = () => {
		this.auth0.authorize();
	}

	logout = () => {
		const returnUrl = process.env.NODE_ENV === 'production' ? 'https://powerrankproject.herokuapp.com' : 'http://localhost:8080/';
		this.auth0.logout({
			clientID: clientId,
			returnTo: returnUrl
		})
	}

	handleAuth = () => {
		return new Promise((resolve, reject) => {
			this.auth0.parseHash((err, authResult) => {
				if (authResult && authResult.accessToken && authResult.idToken) {
					resolve(authResult);
				}
				else if (err) {
					reject(err);
				}
			})
		})
	}
}

export default Auth;