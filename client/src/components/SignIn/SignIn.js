import React, { Component } from 'react';
import { Grid, Button } from 'react-bootstrap';
import googleButton from '../login/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png';
import './SignIn.css';


class SignIn extends Component {


  state = {
    signIn: false, 
    signUp: false
  }

  handleSignIn = e => {

  }; 

  render() {
    return (
      <Grid fluid bsClass="h-100 sign-card-container container">
        <div className="sign-card">
          <div className="sign-container">
            <h2>Sign In</h2>
            <Button bsClass="sign-in btn">Sign In</Button>
            <a href="/auth/google">
						{/* <GoogleButton /> */}
						  <img src={googleButton} alt="sign into Google Button" />
				  	</a>
            <h2>Sign Up</h2>
            <Button bsClass="sign-up btn">Sign Up</Button>
          </div>
        </div>
      </Grid>
    );
  }
}

export default SignIn;