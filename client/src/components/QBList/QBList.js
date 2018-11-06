import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import QB from './QB';
import { Droppable } from 'react-beautiful-dnd';
import './QBList.css';

class QBList extends Component {

  render() {  
    const { qbs } = this.props;
    console.log(qbs);
    return (
      <Droppable droppableId={this.props.column.id}>
        {(provided, snapshot) => (
          <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
          >
            <Grid
            fluid bsClass="qb-list h-100 container">
              {qbs.map((qb, index) => {
                return <QB
                key={qb.id}
                qb={qb}
                index={index}
                id={qb.id}
                name={qb.name}
                />
              })}
              {provided.placholder}
            </Grid>
          </div>
        )}
      </Droppable>   
    );
  }
}

export default QBList;