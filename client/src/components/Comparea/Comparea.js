import React, { Component } from 'react';
import './Comparea.css';
import { Droppable } from 'react-beautiful-dnd';
import QB from '../QBList/QB';
import { Grid } from 'react-bootstrap';


class Comparea extends Component {


  render() {
    
    const { qbs } = this.props;

    return (
      <Droppable droppableId={this.props.column.id}>
        {(provided, snapshot) => (
          <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
          >
            <Grid
            fluid bsClass="comparea-list h-100 container">
              <div style={{"direction": "ltr"}}>
                {qbs.map((qb, index) => {
                return <QB
                key={qb.favId}
                qb={qb}
                index={index}
                id={qb.favId}
                name={qb.name}
                currentCol={this.props.column.id}
                saved={qb.saved}
                />
                })}
              </div>
              {provided.placeholder}
            </Grid>
          </div>
        )}
      </Droppable>   
    );
  }
}

export default Comparea;