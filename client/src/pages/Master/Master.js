import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UserNav from '../../components/Navbar';
import QBList from '../../components/QBList';
import Welcome from '../../components/Welcome';
import './Master.css'

class Master extends Component {
  
  state = {
    curPageLeft: 'QBList',
    curPageRight: 'Welcome'
  }
  
  
  render() {
    const { curPageLeft, curPageRight } = this.state;

    let dispLeft, dispRight;


    switch (curPageLeft) {
      case 'QBList': 
        dispLeft = (<QBList />);
        break;
      default: 
        break;
    };

    switch (curPageRight) {
      case 'Welcome': 
        dispRight = (<Welcome />);
        break;
      default:
        break;
    };



    return (
      <Grid fluid={true} bsClass={"body-container container"}>
        <UserNav />
        <Row bsClass="row h-100">
          <Col md={6} bsClass='data-container data-left h-100 col'>{dispLeft}</Col>
          <Col md={6} bsClass='data-container data-right h-100 col'>{dispRight}</Col>
        </Row>
        <UserNav footer={true}/>
      </Grid>
    );
  }
}

export default Master;