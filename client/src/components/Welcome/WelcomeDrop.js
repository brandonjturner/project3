import React, { Component } from 'react';
import Welcome from './Welcome';

class WelcomeDrop extends Component {

  state = {
    qbList: []
  }

  


  render() {

    const { qbList } = this.state;

    const welcome = (<Welcome>
      {this.props.children}
    </Welcome>);


    return qbList.length === 0 ? welcome : <div>hello</div>
  }
}

export default WelcomeDrop;