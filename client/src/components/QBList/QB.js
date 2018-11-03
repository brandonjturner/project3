import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './QB.css';

const QB = (props) => {
  return (
    <Row bsClass="row qb-row">
      <Col xs={4}>
        <Image src="https://via.placeholder.com/150" />
      </Col>
      <Col xs={4}>
        <h1>{props.stat1}</h1>
      </Col>
      <Col xs={4}>
        <h1>{props.stat2}</h1>
      </Col>
    </Row>
  );
}

export default QB;