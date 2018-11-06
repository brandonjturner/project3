import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UserNav from '../../components/Navbar';
import WelcomeDrop from '../../components/Welcome/WelcomeDrop';
import SignIn from '../../components/login';
import '../Master/Master.css';

class Guest extends Component {

  render() {

    return (
      <Grid fluid={true} bsClass={'body-container container'}>
        <UserNav />
        <Row bsClass="row h-100">
          <Col md={6} bsClass="data-container data-left h-100 col">
            <SignIn />
          </Col>
          <Col md={6} bsClass="data-container data-right h-100 col">
            <WelcomeDrop />
          </Col>
        </Row>
        <UserNav footer={true} />
      </Grid>
    );
  }
}

export default Guest;