import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Welcome.css';

const Welcome = () => {
  return (
    <Grid fluid bsClass="welcome container">
      <div className="welcome-text-container">
        <h1 className="title">Blitz Report</h1>
        <p style={{width: "85%", "textAlign": "center"}}>
          Hello! Welcome to Blitz Report. Description noitpircseD Description
          noitpircseD Description noitpircseD Description noitpircseD
          Description noitpircseD Description noitpircseD Description
          noitpircseD Description noitpircseD
        </p>
        <h2>Tutorial</h2>
        <p style={{width: "85%", "textAlign": "center"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <h2>About</h2>
        <p>
          Blitz Report was created by Brandon Turner, Bruce Chang, Cyrus
          Sepahbodi, and Marlo Carreon
        </p>
      </div>
      <Row>
        <Col xs={3}>
          <div className="img-creator">
            <Image src="https://via.placeholder.com/150" />
          </div>
        </Col>
        <Col xs={3}>
          <div className="img-creator">
            <Image src="https://via.placeholder.com/150" />
          </div>
        </Col>
        <Col xs={3}>
          <div className="img-creator">
            <Image src="https://via.placeholder.com/150" />
          </div>
        </Col>
        <Col xs={3}>
          <div className="img-creator">
            <Image src="https://via.placeholder.com/150" />
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Welcome;
