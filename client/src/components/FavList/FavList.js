import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import QB from '../QBList/QB';
import { Grid } from 'react-bootstrap';
import './FavList.css';

class FavList extends Component {


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
            fluid bsClass="qb-list h-100 container">
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
              {provided.placeholder}
            </Grid>
          </div>
        )}
      </Droppable>   
    );
  }
}

export default FavList;