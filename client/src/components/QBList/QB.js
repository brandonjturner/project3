import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './QB.css';

class QB extends Component {
  
  render() {
    const { id } = this.props;
    
    return (
      <div id={id} className="row qb-row">
        <Col xs={4}>
          <Image src="https://via.placeholder.com/150" />
        </Col>
        <Col xs={4}>
          <h1>{this.props.stat1}</h1>
        </Col>
        <Col xs={4}>
          <h1>{this.props.stat2}</h1>
        </Col>
      </div>
    );
  };
  
}

export default QB;