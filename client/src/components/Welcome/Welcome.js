import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Welcome.css';

const Welcome = () => {
  return (
    <Grid fluid bsClass="welcome container">
      <div className="welcome-text-container">
        <h1>Football</h1>
        <p>
          Hello! Welcome to (title). Description noitpircseD Description
          noitpircseD Description noitpircseD Description noitpircseD
          Description noitpircseD Description noitpircseD Description
          noitpircseD Description noitpircseD
        </p>
        <h2>Tutorial</h2>
        <p>First you do this then you do that thing</p>
        <h2>About</h2>
        <p>
          This website was created by Brandon Turner, Bruce Chang, Cyrus
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
