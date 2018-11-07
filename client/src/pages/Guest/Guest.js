import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import UserNav from '../../components/Navbar';
import GuestWelcome from './GuestWelcome';
import SignIn from '../../components/login';
import '../Master/Master.css';
import './Guest.css';
import axios from 'axios';

class Guest extends Component {

  state = {
    redirectTo: null,
    loading: true
  }

  componentDidMount = () => {
    axios
      .get('/auth/user')
      .then(response => {
        //console.log(response);
        const { user } = response.data;
        if (user === null) {
          console.log("No user, staying at guest page");
          this.setState({loading: false});
        } 
        else {
          this.setState({redirectTo: '/auth'});
        }
      });
  }

  render() {

    const guest = (
      <Row bsClass="row h-100">
        <Col md={6} bsClass="guest-data-container data-left h-100 col">
          <SignIn {...this.props}/>
        </Col>
        <Col md={6} bsClass="guest-data-container data-right h-100 col">
          <GuestWelcome isdraggingover={false}/>
        </Col>
      </Row>
    )

    return this.state.redirectTo === null ? (
      <Grid fluid={true} bsClass={'body-container container'}>
        <UserNav placeholder={false} {...this.props}/>
        {this.state.loading ? <Row bsClass="row h-100"><div>loading</div></Row> : guest}
        <UserNav footer={true} />
      </Grid> 
    ) : <Redirect to={{ pathname: this.state.redirectTo }} />;
  }
}

export default Guest;