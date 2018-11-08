import React, { Component } from 'react';
import { Grid, Button } from 'react-bootstrap';
import googleButton from '../login/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';
import './SignIn.css';


class SignIn extends Component {

  state = {
    signIn: false, 
    signUp: false
  }

  handleSignIn = e => {
    e.preventDefault();
    this.setState({signIn: true, signUp: false});
  }; 

  handleSignUp = e => {
    e.preventDefault();
    this.setState({signUp: true, signIn: false});
  }

  render() {
    const { signIn, signUp } = this.state;

    let renderTarget;

    const SignInLanding = (
      <Grid fluid bsClass="h-100 sign-card-container container">
        <div className="sign-card">
          <div className="sign-container">
            <h2 style={{"marginBottom": "20px"}}>Welcome</h2>
            <Button onClick={this.handleSignIn} bsClass="sign-in btn">Sign In</Button>
            <a href="/auth/google">
						{/* <GoogleButton /> */}
						  <img src={googleButton} alt="sign into Google Button" />
				  	</a>
            <h4 style={{"marginBottom": "20px"}}>Need an Account?</h4>
            <Button onClick={this.handleSignUp} bsClass="sign-up btn">Sign Up</Button>
          </div>
        </div>
      </Grid>
    );

    const SignInForm = (
      <Grid fluid bsClass="h-100 sign-card-container container">
        <LoginForm signupRedirect={this.handleSignUp} {...this.props} />
      </Grid>
    );

    const SignUpForm = (
      <Grid fluid bsClass="h-100 sign-card-container container">
        <SignupForm signinRedirect={this.handleSignIn} {...this.props} />
      </Grid>
    );

    renderTarget = SignInLanding;

    if (signIn) {
      renderTarget = SignInForm; 
    } 
    else if (signUp) {
      renderTarget = SignUpForm;
    }


    return renderTarget;
  }
}

export default SignIn;