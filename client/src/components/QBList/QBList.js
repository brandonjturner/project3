import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import QB from './QB';
import { Droppable } from 'react-beautiful-dnd';
import './QBList.css';

class QBList extends Component {

  render() {  
    const { qbs, saved, updateUser } = this.props;



    //console.log(togglesaved);
    //console.log(qbs);
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
                
                const isFav = saved.filter(qbId => qbId === qb.id);
                
                return <QB
                key={qb.id}
                qb={qb}
                index={index}
                id={qb.id}
                name={qb.name}
                currentCol={this.props.column.id}
                saved={isFav.length === 1 ? true : false}
                username={this.props.username}
                updateUser={updateUser}
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

export default QBList;