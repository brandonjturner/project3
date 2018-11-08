import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Welcome.css';
import styled from 'styled-components';
import brandon from '../../data/brandon.jpg';
import bruce from '../../data/bruce.jpg';
import cyrus from '../../data/cyrus.jpg';
import marlo from '../../data/marlo.jpg';

const Div = styled.div`
  opacity: ${props => (props.isdraggingover ? '0' : '100')};
  transition: opacity 0.3s ease;
`;


const Welcome = (props) => {
  return (
    <Grid fluid bsClass="welcome container">
      <Div isdraggingover={props.isdraggingover}>
        <div className="welcome-text-container">
          <h1 className="title">Blitz Report</h1>
          <p style={{width: "85%", "textAlign": "center", direction: "ltr", color: "rgba(255, 255, 255, 0.726)"}}>
            Hello! Welcome to Blitz Report, where you can take your Fantasy Football game to the next level. Track your favorite Quarterback's stats throughout the season with real-time post-game updates.
          </p>
          <h2>Tutorial</h2>
          <p style={{width: "85%", "textAlign": "center", direction: "ltr", color: "rgba(255, 255, 255, 0.726)"}}>Drag a quarterback from the roster to the right-side panel to see more detailed statistics. Use the save button to save quarterbacks for use in comparison mode. Toggle comparison mode and drag a saved quarterback to the right panel to see their (stat) based off of the opposing team.</p>
          <h2>About</h2>
          <p style={{color: "rgba(255, 255, 255, 0.726)"}}>
            Created by Brandon Turner, Bruce Chang, Cyrus
            Sepahbodi, and Marlo Carreon
          </p>
        </div>
      </Div>
      <Div isdraggingover={props.isdraggingover}>
        <Row bsClass="row welcome-row">
          <Col xs={3}>
            <div className="img-creator">
              <img src={brandon} style={{width: "140px"}} alt="Brandon Turner"/>
            </div>
          </Col>
          <Col xs={3}>
            <div className="img-creator">
              <img src={bruce} style={{width: "140px"}} alt="Bruce Chang"/>
            </div>
          </Col>
          <Col xs={3}>
            <div className="img-creator">
              <img src={cyrus} style={{width: "140px"}} alt="Cyrus Sepahbodi"/>
            </div>
          </Col>
          <Col xs={3}>
            <div className="img-creator">
              <img src={marlo} style={{width: "140px"}} alt="Marlo Carreon"/>
            </div>
          </Col>
        </Row>
      </Div>
    </Grid>
  );
};

export default Welcome;
