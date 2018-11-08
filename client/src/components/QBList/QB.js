import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Draggable } from 'react-beautiful-dnd';
import './QB.css';
import styled from 'styled-components';
import axios from 'axios';

const DefCard = styled.div`
  background-color: ${props => (props.isDragging ? '#141418f3': '#322b3acc')};
`;

const Div = styled.div`
  background-color: ${props => (props.isDragging ? '#141418f3': '#322b3acc')};
`;

const CompPercent = styled.h5`
  color: ${props => props.status};
  float: clear;
`;

class QB extends Component {
  state = {
    currentCol: this.props.currentCol,
    saved: this.props.saved,
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.saved !== this.props.saved && this.state.saved === this.props.saved) {
    //   this.setState({ saved: nextProps.saved});
    // }
  }

  handleSave = (e) => {
    this.setState({ saved: true });
    axios
      .put('/auth/user/player/add', { 
        username: this.props.username,
        qbId: this.props.qb.id
      })
      .then(response => {
        console.log('QB has been saved');
        console.log(response);
        this.props.updateUser();
      })
      .catch(error => console.log(error));
  }

  handleDelete = (e) => {
    this.setState({ saved: false });
    axios
      .put('/auth/user/player/delete', { 
        username: this.props.username,
        qbId: this.props.qb.id
      })
      .then(response => {
        console.log('QB has been deleted')
        this.props.updateUser();
      })
      .catch(error => console.log(error));
  }
  
  render() {
    const { id, qb, compareCity } = this.props;
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
              {saved ? <button className="saved-qb-button" onClick={this.handleDelete} >Saved</button> : <button className="save-qb-button" onClick={this.handleSave}>Save</button>}
              </Col>
            </DefCard>)



          if (currentCol === "column-2" || currentCol === "column-3") {
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
                      <h4 style={{float: 'clear'}}>Completion: {qb.completionPercentage * 100}%</h4>
                    </Col>
                  </Row>
                </Col>
                <Col xs={1}>
                  {saved ? <button className="saved-qb-button" onClick={this.handleDelete}>Saved</button> : <button className="save-qb-button" onClick={this.handleSave}>Save</button>}
                </Col>
              </Div>)
          }

          if (currentCol === "column-4") {

            let city = compareCity; 
            let cityPerc;
            let showCity = false;
            let status = 'white';

            if (city !== 'Select a city') {
              showCity = true;
              cityPerc = qb.vsDefenseCompletionPercentage[city] * 100;
              if (cityPerc > qb.completionPercentage * 100) {
                status = 'green';
              } else if (cityPerc === qb.completionPercentage * 100) {
                status = 'white';
              } else {
                status = 'red';
              }
            } 


            const defComp = (
              <div>
                <h4 style={{float: 'clear'}}>Completion: {qb.completionPercentage * 100}%</h4>
              </div>
            );
            const appComp = (
              <div>
                <h5 style={{float: 'clear'}}>Completion: {qb.completionPercentage * 100}%</h5>
                <CompPercent status={status}>Comp. against {compareCity}: {cityPerc}%</CompPercent>
              </div>
            );
            

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
                      {showCity ? appComp : defComp}
                    </Col>
                  </Row>
                </Col>
                <Col xs={1}>
                  {saved ? <button className="saved-qb-button" onClick={this.handleDelete}>Saved</button> : <button className="save-qb-button" onClick={this.handleSave}>Save</button>}
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