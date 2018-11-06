import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import { Draggable } from 'react-beautiful-dnd';
import './QB.css';

class QB extends Component {
  
  render() {
    const { id, qb } = this.props;
    
    return (
      <Draggable draggableId={this.props.qb.id} index={this.props.index}>
        {(provided, snapshot) => (
        <div 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        isDragging={snapshot.isDragging}
        id={id} 
        className="row qb-row"
        >
          <Col xs={3}>
            <div className="qb-img-container">
              <img src={qb.image} className={"img qb-img"}/>
            </div>
          </Col>
          <Col xs={3}>
            <h4>{qb.name}</h4>
          </Col>
          <Col xs={3}>
            <h4>APT: {qb.avgPocketTime}</h4>
          </Col>
          <Col xs={3}>
            <h4>COMP %: {qb.completionPercentage}</h4>
          </Col>
        </div>)}
      </Draggable>
    );
  };
  
}

export default QB;