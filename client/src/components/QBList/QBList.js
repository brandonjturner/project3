import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import QB from './QB';
import './QBList.css';

class QBList extends Component {

  

  render() {  
    const { qblist } = this.props;

    return (
      <Grid fluid bsClass="qb-list container">
      {qblist.map(qb => {
        return <QB 
        id={qb.name}
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