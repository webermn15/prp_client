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
		this.auth0.logout({
			clientID: clientId,
			returnTo: 'http://localhost:8080/'
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