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
		const { onLoginRequest } = this.props;
		onLoginRequest(this.state);
	}

	render() {
		console.log(process.env.API_URL);
		return(
			<div style={{display: "flex", flexDirection: "column", padding: "20px", width: "200px"}}>
				<input placeholder="Username" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)}/>
				<input placeholder="Password" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
				<button
					onClick={() => this.handleSubmit()}
				>
					Submit
				</button>
			</div>
		)
	}
}

export default Login;

Login.propTypes = {
	onLoginRequest: PropTypes.func.isRequired
}