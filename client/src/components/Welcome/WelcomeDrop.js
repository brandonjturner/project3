import React, { Component } from 'react';
import Welcome from './Welcome';
import { DropTarget } from 'react-dnd';

const dragTarget = {
  drop(props, monitor) {
    return {};
  }
}

const Types = {
  WELCOME: 'welcome'
}

let collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}


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

export default DropTarget(Types.WELCOME, dragTarget, collect)(WelcomeDrop);