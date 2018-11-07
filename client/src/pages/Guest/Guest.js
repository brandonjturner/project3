import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UserNav from '../../components/Navbar';
import GuestWelcome from './GuestWelcome';
import SignIn from '../../components/login';
import '../Master/Master.css';
import './Guest.css';

class Guest extends Component {

  render() {

    return (
      <Grid fluid={true} bsClass={'body-container container'}>
        <UserNav placeholder={false} {...this.props}/>
        <Row bsClass="row h-100">
          <Col md={6} bsClass="guest-data-container data-left h-100 col">
            <SignIn {...this.props}/>
          </Col>
          <Col md={6} bsClass="guest-data-container data-right h-100 col">
            <GuestWelcome isdraggingover={false}/>
          </Col>
        </Row>
        <UserNav footer={true} />
      </Grid>
    );
  }
}

export default Guest;