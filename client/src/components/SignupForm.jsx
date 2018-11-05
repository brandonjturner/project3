import React, { Component } from 'react';
import axios from 'axios';
import './SignupForm.css';
import { Redirect } from 'react-router-dom';
import { FormGroup, HelpBlock, FormControl } from 'react-bootstrap';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('/auth/signup', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log('youre good');
          this.setState({
            redirectTo: '/login'
          });
        } else {
          console.log('duplicate');
        }
      });
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
    return (
      <div className="signup-form-container">
        <form action="">
          <h1>Sign Up</h1>
          <FormGroup>
            <FormControl
              type="text"
              name="username"
              placeholder={'Username'}
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="password"
              name="password"
              placeholder={'Password'}
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="password"
              name="confirmPassword"
              placeholder={'Confirm Password'}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
						<HelpBlock>
							<a className="login-link" onClick={this.props.signinRedirect} href="#">Already have one?</a>
				  	</HelpBlock>
          </FormGroup>
        </form>
        <button className="sign-up" onClick={this.handleSubmit}>Sign up</button>
      </div>
    );
  }
}
export default SignupForm;
