import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Draggable } from 'react-beautiful-dnd';
import './QB.css';
import styled from 'styled-components';

const DefCard = styled.div`
  background-color: ${props => (props.isDragging ? '#141418f3': '#322b3acc')};
`;

const Div = styled.div`
  background-color: ${props => (props.isDragging ? '#141418f3': '#322b3acc')};
`;

class QB extends Component {
  state = {
    currentCol: this.props.currentCol,
    saved: this.props.saved,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.saved !== this.props.saved) {
      this.setState({ saved: nextProps.saved});
    }
  }

  handleSave = (e, id) => {
    e.preventDefault();
    console.log(this.props.togglesaved);
  }

  handleRemove = (e, id) => {
    e.preventDefault();
    this.props.togglesaved(id)
  }
  
  render() {
    const { id, qb } = this.props;
    const { currentCol, saved } = this.state;
    
    return (
      <Draggable draggableId={this.props.qb.id} index={this.props.index}>
        {(provided, snapshot) => {

          const defaultCard = (
            <DefCard 
            ref={provided.innerRef}
            id={id} 
            className="row qb-row"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            >
              <Col xs={2}>
                <div className="qb-img-container">
                  <img src={qb.image} className={"img qb-img-prev"} alt={`${qb.name}`}/>
                </div>
              </Col>
              <Col xs={9}>
                <Row>
                  <Col xs={4}>
                    <h4>{qb.name}</h4>
                  </Col>
                  <Col xs={4}>
                    <h4>Team: {qb.currentTeam}</h4>
                  </Col>
                </Row>
              </Col>
              <Col xs={1}>
              {saved ? <button className="saved-qb-button" onClick={this.handleRemove(this.props.id)}>Saved</button> : <button className="save-qb-button" onClick={(e) => this.handleSave(e, this.props.id)}>Save</button>}
              </Col>
            </DefCard>)



          if (currentCol === "column-2") {
            return (
              <Div 
              ref={provided.innerRef}
              id={id} 
              className="row qb-row"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              isDragging={snapshot.isDragging}
              >
                <Col xs={3}>
                  <div className="qb-img-container">
                    <img src={qb.image} className={"img qb-img"} alt={`${qb.name}`}/>
                  </div>
                </Col>
                
                <Col xs={8}>
                  <Row>
                    <Col xs={8}>
                      <h4>{qb.name}, {qb.currentTeam}</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <h4>Avg. Pocket Time: {qb.avgPocketTime}</h4>
                    </Col>
                    <Col xs={6}>
                      <h4 style={{float: 'clear'}}>Completion %: {qb.completionPercentage}</h4>
                    </Col>
                  </Row>
                </Col>
                <Col xs={1}>
                  {saved ? <button className="saved-qb-button" onClick={this.handleRemove}>Saved</button> : <button className="save-qb-button" onClick={this.handleSave}>Save</button>}
                </Col>
              </Div>)
          }

        return defaultCard;

        }}
      </Draggable>
    );
  };
  
}

export default QB;