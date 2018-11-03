import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { DragSource } from 'react-dnd';


import './QB.css';

const Types = {
  CARD: 'card'
};


const qbSource = {
  beginDrag(props) {
    return {
      
    }
  }
}

let collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class QB extends Component {
  
  render() {
    const { id } = this.props;
    const { isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;
    
    return connectDragSource(
      <div id={id} className="row qb-row" style={{opacity}}>
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

export default DragSource(Types.CARD, qbSource, collect)(QB);