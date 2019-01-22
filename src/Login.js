import React, { Component } from 'react';

const formatPropAsKey = (key, value) => {
	return {[key]: value}
}

export default class Login extends Component {
	constructor() {
		super()

		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange = e => {
		this.setState(formatPropAsKey(e.target.name, e.target.value));
	}

	handleSubmit = async () => {
		console.log(process.env.API_URL);
		try {
			const response = await fetch(`${process.env.API_URL}`+'/api', {
				method: 'POST',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (!response.ok) {
				throw new Error('yeet')
			}
			const body = await response.json();
			console.log(body);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		console.log(this.state);
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