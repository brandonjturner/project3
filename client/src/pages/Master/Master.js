import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UserNav from '../../components/Navbar';
import QBList from '../../components/QBList';
import WelcomeDrop from '../../components/Welcome/WelcomeDrop';
import './Master.css';
import { DragDropContext } from 'react-beautiful-dnd';
import API from '../../utils/API';

class Master extends Component {
  state = {
    initialData: {},
    compareMode: false,
  };

  componentDidMount = () => {
    this.loadQBs();
  }

  loadQBs = () => {
    const qbIds = [];
    const qbs = {};

    API.getQBList()
      .then(res => {
        res.data.forEach((e, i) => {
          qbIds.push(`qb-${i + 1}`);
          e['id'] = `qb-${i + 1}`;
          qbs[`qb-${i + 1}`] = e;
        });
        
        this.setState({ initialData: {
          qbs: qbs,
          columns: {
            'column-1': {
            id: 'column-1',
            title: 'QB List',
            qbIds: qbIds
          },
            'column-2': {
            id: 'column-2',
            title: 'Info',
            qbIds: [],
          },
          },
          columnOrder: ['column-1', 'column-2'],
          }});
      })
      .catch(err => console.log(err))
  }


  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    const { initialData } = this.state;

    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = initialData.columns[source.droppableId];
    const finish = initialData.columns[destination.droppableId];

    if (start === finish) {
      const newqbIds = Array.from(start.qbIds);
      newqbIds.splice(source.index, 1);
      newqbIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        qbIds: newqbIds
      };

      const newState = {
        ...this.state,
        initialData: {
          ...initialData,
          columns: {
            ...initialData.columns,
            [newColumn.id]: newColumn
          }
        }
      };

      this.setState(newState);
      return;
    }

    else {
      const startQbIds = Array.from(start.qbIds);
      startQbIds.splice(source.index, 1);
      const newStart = {
        ...start, 
        qbIds: startQbIds,
      };

      const finishQbIds = Array.from(finish.qbIds);
      finishQbIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        qbIds: finishQbIds,
      };

      const newState = {
        ...this.state,
        initialData: {
          ...initialData,
          columns: {
            ...initialData.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
          }
        }
      };
      
      this.setState(newState);
      return
    }

  };

  render() {
    const { qblist, compareMode, initialData } = this.state;
    
    if (initialData.qbs != undefined) {
      console.log(initialData);
      const qbs1 = initialData.columns['column-1'].qbIds.map(qbId => initialData.qbs[qbId]);
      const qbs2 = initialData.columns['column-2'].qbIds.map(qbId => initialData.qbs[qbId]);
      console.log(qbs1);
  
      const basic = (
        <Row bsClass="row h-100 data-row">
          <Col md={6} bsClass="data-container data-left h-100 col">
            <QBList key={initialData.columns['column-1'].id} column={initialData.columns['column-1']} qbs={qbs1}/>
          </Col>
          <Col md={6} bsClass="data-container data-right h-100 col">
            <WelcomeDrop key={initialData.columns['column-2'].id} column={initialData.columns['column-2']} qbs={qbs2}/>
          </Col>
        </Row>
      );

      const compare = (
        <Row bsClass="row h-100">
          <Col md={6} bsClass="data-container data-left h-100 col">
            favs
          </Col>
          <Col md={6} bsClass="data-container data-right h-100 col">
            inspect
          </Col>
        </Row>
      );
  
      return (
        <DragDropContext 
          onDragEnd = { this.onDragEnd }
        >
          <Grid fluid={true} bsClass={'body-container container'}>
            <UserNav />
            {compareMode ? compare : basic}
            <UserNav footer={true} />
          </Grid>
        </DragDropContext>
      );
    }
    else {
      console.log(initialData);
      return (
        <DragDropContext 
          onDragEnd = { this.onDragEnd }
        >
          <Grid fluid={true} bsClass={'body-container container'}>
            <UserNav />
              <Row bsClass="row h-100">
                loading
              </Row>
            <UserNav footer={true} />
          </Grid>
        </DragDropContext>
      );
    }
    
  }
}

export default Master;
