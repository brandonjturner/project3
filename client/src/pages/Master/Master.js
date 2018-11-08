import React, { Component } from 'react';
import { Grid, Row, Col, Dropdown, MenuItem, Button } from 'react-bootstrap';
import UserNav from '../../components/Navbar';
import QBList from '../../components/QBList';
import WelcomeDrop from '../../components/Welcome/WelcomeDrop';
import Comparea from '../../components/Comparea';
import FavList from '../../components/FavList';
import './Master.css';
import { DragDropContext } from 'react-beautiful-dnd';
import API from '../../utils/API';
import dummyFavs from './dummyFavs.json';
import axios from 'axios';


class Master extends Component {
  state = {
    initialData: {},
    compareMode: false,
    compareCity: 'Select a city',
    currentUser: null
  };

  toggleCompareMode = () => {
    this.setState({compareMode: !this.state.compareMode});
  }

  handleCompareCity = (e) => {
    console.log(e);
    this.setState({compareCity: e});
  }

  toggleSaved = id => {
    console.log(id);
    this.setState({
      ...this.state,
      initialData: {
        ...this.state.initialData,
        qbs: {
          ...this.state.initialData.qbs,
          [id]: {
            saved: !this.state.initialData.qbs[id].saved
          }
        }
      }
    })
  }

  componentDidMount = () => {
    axios
      .get('/auth/user')
      .then(response => {
        //console.log(response);
        const { user } = response.data;
        if (user === null) {
          console.log('No User');
        } 
        else {
          this.setState({ currentUser: user});
        }
        this.loadQBs();
      });
  }

  updateUser = () => {
    console.log('updateUser');
    axios
      .get('/auth/user')
      .then(response => {
        console.log(response);
        const { user } = response.data;
        if (user === null) {
          console.log('No User');
        } 
        else {
          this.setState({ currentUser: user});
        }
        this.loadQBs();
      });
  }

  updateUserNoLoad = () => {
    console.log('updateUserNoLoad')
    axios
      .get('/auth/user')
      .then(response => {
        console.log(response);
        const { user } = response.data;
        if (user === null) {
          console.log('No User');
        } 
        else {
          this.setState({ currentUser: user});
        }
        
    });
  }

  loadQBs = () => {
    const qbIds = [];
    const qbs = {};

    API.getQBList()
      .then(res => {
        res.data.forEach((e, i) => {
          qbIds.push(`qb-${i + 1}`);
          e['id'] = `qb-${i + 1}`;
          e['saved'] = false;
          qbs[`qb-${i + 1}`] = e;
        });
        
        this.setState({ 
          ...this.state,
          initialData: {
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
        this.loadFavs();
      })
      .catch(err => console.log(err))
  }

  loadFavs = () => {

    const { players } = this.state.currentUser;

    const qbIds = players;

    //console.log(dummyFavs);
    this.setState({ 
      ...this.state,
      initialData: {
        ...this.state.initialData,
        columns: {
          ...this.state.initialData.columns,
          'column-3': {
            id: 'column-3',
            title: 'Favs List',
            qbIds: qbIds
          },
          'column-4': {
            id: 'column-4',
            title: 'Comparea',
            qbIds: [],
          },
        },
        columnOrder: [this.state.initialData.columnOrder, 'column-3', 'column-4'],
      }});
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
    const { compareMode, initialData, currentUser, compareCity } = this.state;
    
    
    if (initialData.qbs !== undefined && initialData.columns['column-3'] !== undefined && currentUser !== null) {
    
      const { players, username } = currentUser;
    

      //console.log(initialData);
      const qbs1 = initialData.columns['column-1'].qbIds.map(qbId => initialData.qbs[qbId]);
      const qbs2 = initialData.columns['column-2'].qbIds.map(qbId => initialData.qbs[qbId]);
      //console.log(initialData.columns);
      const qbs3 = initialData.columns['column-3'].qbIds.map(qbId => initialData.qbs[qbId]);
      const qbs4 = initialData.columns['column-4'].qbIds.map(qbId => initialData.qbs[qbId]);

      const basic = (
        <Row bsClass="row h-100 data-row">
          <Col md={6} bsClass="data-container data-left h-100 col">
            <QBList key={initialData.columns['column-1'].id} column={initialData.columns['column-1']} qbs={qbs1} saved={players} username={username} updateUser={this.updateUserNoLoad}/>
          </Col>
          <Col md={6} bsClass="data-container data-right h-100 col">
            <WelcomeDrop key={initialData.columns['column-2'].id} column={initialData.columns['column-2']} qbs={qbs2} saved={players} username={username} updateUser={this.updateUserNoLoad}/>
          </Col>
        </Row>
      );

      
      let dummyOptions = ['ATL', 'ARI', 'BAL', 'BUF', 'CAR', 'CHI', 'CIN', 'CLE', 'DAL', 'DEN', 'DET', 'GB', 'HOU', 'IND', 'JAX', 'KC', 'LAC', 'LAR', 'MIA', 'MIN', 'NE', 'NO', 'NYG', 'NYJ', 'OAK', 'PHI', 'PIT', 'SEA', 'SF', 'TB', 'TEN', 'WAS'];
      const compareForm = (
        <form>
          <Dropdown componentClass={"ButtonGroup"} title="Select a city" id="city-picker" onSelect={(e) => this.handleCompareCity(e)} >
            <Dropdown.Toggle>
              {this.state.compareCity}
            </Dropdown.Toggle>
            <Dropdown.Menu >
              {dummyOptions.map((city, i) => {
                return (
                <MenuItem eventKey={city}>{city}</MenuItem>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
        </form>
      );

      const compare = (
        <Row bsClass="row h-100 data-row">
          <Col md={6} bsClass="data-container data-left h-100 col">
            <FavList key={initialData.columns['column-3'].id} column={initialData.columns['column-3']} qbs={qbs3} saved={players} username={username} updateUser={this.updateUserNoLoad}/>
          </Col>
          <Col md={6} bsClass="data-container data-right h-100 col">
            <nav className="compare-nav">
              {compareForm}
            </nav>
            <Comparea key={initialData.columns['column-4'].id} column={initialData.columns['column-4']} qbs={qbs4} saved={players} username={username} updateUser={this.updateUserNoLoad} compareCity={compareCity}/>
          </Col>
        </Row>
      );
  
      return (
        <DragDropContext 
          onDragEnd = { this.onDragEnd }
        >
          <Grid fluid={true} bsClass={'body-container container'}>
            <UserNav toggleCompareMode={this.toggleCompareMode} compareMode={this.state.compareMode} {...this.props} updateUser={this.updateUser}/>
            {compareMode ? compare : basic}
            <UserNav footer={true} />
          </Grid>
        </DragDropContext>
      );
    }
    else {
      //console.log(initialData);
      return (
        <DragDropContext 
          onDragEnd = { this.onDragEnd }
        >
          <Grid fluid={true} bsClass={'body-container container'}>
            <UserNav toggleCompareMode={this.toggleCompareMode} {...this.props} updateUser={this.updateUser}/>
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
