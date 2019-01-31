import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPropAsKey } from '../utils';

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange = e => {
		this.setState(formatPropAsKey(e.target.name, e.target.value));
	}

	handleSubmit = () => {
		const { auth } = this.props;
		// const { onLoginRequest } = this.props;
		// onLoginRequest(this.state);
		auth.login();
	}

	render() {
		console.log('props in Login Component: ', this.props);
		return(
			<div style={{display: "flex", flexDirection: "column", padding: "20px", width: "200px"}}>
				<button
					onClick={() => this.handleSubmit()}
				>
					Login via Auth0
				</button>
			</div>
		)
	}
}

export default Login;

Login.propTypes = {
	auth: PropTypes.object.isRequired
}