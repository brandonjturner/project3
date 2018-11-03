import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import QB from './QB';
import './QBList.css';

class QBList extends Component {

  

  render() {

    let sampleQbs = [
      {
        name: 'QB1',
        stat1: '5%',
        stat2: '5%',
      },
      {
        name: 'QB2',
        stat1: '6%',
        stat2: '6%',
      },
      {
        name: 'QB3',
        stat1: '3%',
        stat2: '3%',
      },
      {
        name: 'QB4',
        stat1: '2%',
        stat2: '2%',
    }];

    return (
      <Grid fluid bsClass="qb-list container">
      {sampleQbs.map(qb => {
        return <QB 
        name={qb.name}
        stat1={qb.stat1}
        stat2={qb.stat2}
        />
      })}
      </Grid>   
    );
  }
}

export default QBList;