import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './Navbar.css';
import styled from 'styled-components';
import axios from 'axios';

const Compare = styled.button`
  background-color: ${props => props.compareMode ? 'rgba(226, 148, 2, 0.836)' : 'none'};
  color: ${props => props.compareMode ? 'rgba(255, 255, 255, 0.836)' : 'rgba(226, 148, 2, 0.678)'};
`;

class UserNav extends Component {

  state = {
    userName: '',
    signedIn: false,
    redirectTo: null
  }

  componentWillReceiveProps = () => {
    axios
      .get('/auth/user')
      .then(response => {
        //console.log(response);
        const { user } = response.data;
        if (user === null) {
          this.setState({userName: ''});
        } 
        else {
          this.setState({userName: user.username});
        }
      });
    if (this.props.placeholder === false) {
      this.setState({userName: ''});
    }
    else {
      this.setState({ signedIn: true });
    }
  }

  handleCompareClick = () => {
    this.props.toggleCompareMode();
    this.props.updateUser();
  }

  signOut = e => {
    e.preventDefault();
    axios
      .post('auth/logout', {})
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
    this.setState({redirectTo: '/'});
  }

  render() {

    if (this.state.redirectTo && this.state.signedIn === true) {
      return <Redirect to={{pathname: this.state.redirectTo}} />;
    }
    
    const header = (
      <Navbar fixedTop inverse fluid pullLeft>
        <Navbar.Header pullLeft>
          <Navbar.Brand>
            <a href="/" className="nav-brand">Blitz Report</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav navbar pullLeft>
          <div className="compare-toggle-container">
            {this.props.placeholder === false ? '' : <Compare className="compare-button" onClick={this.handleCompareClick} compareMode={this.props.compareMode}>Compare Mode</Compare>}
          </div>
        </Nav>
        <Nav navbar pullRight bsClass="logout-button-container nav">
          <div className="user-container">
            <div className="username">{this.state.userName}</div>
            <div className="h-100" style={{minHeight: "50px"}}>
              {this.props.placeholder === false ? '' : <button className="logout-button" onClick={this.signOut}>Sign Out</button>}
            </div>
          </div>
        </Nav>
      </Navbar>
    );

    const footer = (
      <Navbar fixedBottom inverse fluid bsClass="nav-bot navbar"/>
    );
    
    let userNav;
    
    this.props.footer ? userNav = footer : userNav = header;

    return userNav;
  }
}

export default UserNav;
