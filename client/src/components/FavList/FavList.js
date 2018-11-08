import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import QB from '../QBList/QB';
import { Grid } from 'react-bootstrap';
import './FavList.css';
import axios from 'axios';



class FavList extends Component {

  state = {
    currentUser: null,
    shown: false
  }

  componentDidRender = () => {
    console.log('test');
  }

  render() {
    
    const { qbs, saved, updateUser } = this.props;
    const noQbsMessage = <h1 style={{color: "rgb(105, 90, 121)"}}>Save Quarterbacks in basic mode!</h1>
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
              {qbs.length === 0 ? noQbsMessage : ''}
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

export default FavList;