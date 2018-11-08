import React, { Component } from 'react';
import './Comparea.css';
import { Droppable } from 'react-beautiful-dnd';
import QB from '../QBList/QB';
import { Grid } from 'react-bootstrap';


class Comparea extends Component {


  render() {
    
    const { qbs, compareCity, saved, updateUser, username } = this.props;
    


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

                const isFav = saved.filter(qbId => qbId === qb.id);
      
                return <QB
                key={qb.id}
                qb={qb}
                index={index}
                id={qb.id}
                name={qb.name}
                currentCol={this.props.column.id}
                saved={isFav.length === 1 ? true : false}
                username={username}
                compareCity={compareCity}
                updateUser={updateUser}
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