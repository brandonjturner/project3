import React, { Component } from 'react';
import Welcome from './Welcome';
import { Droppable } from 'react-beautiful-dnd';
import { Grid } from 'react-bootstrap';
import QB from '../QBList/QB';





class WelcomeDrop extends Component {

  state = {
    qbList: []
  }

  


  render() {

    const { qbs } = this.props;

    return (
      <Droppable droppableId={this.props.column.id}>
      {(provided, snapshot) => {
        let welcomeState = (
          <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
          >
            <Welcome isdraggingover={snapshot.isDraggingOver}>
              {this.props.children}
            </Welcome>
          </div>
        );
        if (qbs.length > 0) {
          welcomeState = (
            <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            className="info-section"
            >
              <Grid
              fluid bsClass="qb-info-list h-100 container">
                {qbs.map((qb, index) => {
                  return <QB
                  key={qb.id}
                  qb={qb}
                  index={index}
                  id={qb.id}
                  name={qb.name}
                  currentCol={this.props.column.id}
                  />
                })}
              {provided.placholder}
            </Grid>
            </div>
          );
        }
        
        return welcomeState;
      }}
      
      
      </Droppable>
    );
    
  }
}

export default WelcomeDrop;