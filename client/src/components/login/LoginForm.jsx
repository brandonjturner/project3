import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'
import './LoginForm.css';
import { FormGroup, HelpBlock, FormControl } from 'react-bootstrap';

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
	}

	login = (username, password) => {
		
	}


	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log('handleSubmit');
		this.login(this.state.username, this.state.password);
		this.setState({
			redirectTo: '/auth'
		})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="login-form-container">
					<form>
						<h2>Sign In</h2>
						<FormGroup>
							<FormControl
							type="text"
							name="username"
							placeholder={'Username'}
							value={this.state.username}
							onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup bsClass="password-field form-group">
							<FormControl
							type="password"
							name="password"
							placeholder={'Password'}
							value={this.state.password}
							onChange={this.handleChange}
							/>
							<HelpBlock>
								<a className="create-account-link" onClick={this.props.signupRedirect} href="/#">Create an account</a>
							</HelpBlock>
						</FormGroup>
						<button className="sign-in" onClick={this.handleSubmit}>Sign in</button>
					</form>
					<a href="/auth">
						{/* <GoogleButton /> */}
						<img src={googleButton} alt="sign into Google Button" />
					</a>
				</div>
			)
		}
	}
}
export default LoginForm;