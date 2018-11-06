import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import styled from 'styled-components';

const Compare = styled.button`
  background-color: ${props => props.compareMode ? 'rgba(226, 148, 2, 0.836)' : 'none'};
  color: ${props => props.compareMode ? 'rgba(255, 255, 255, 0.836)' : 'rgba(226, 148, 2, 0.678)'};
`;

class UserNav extends Component {

  state = {
    currentUser: 'placeholder'
  }

  componentDidMount = () => {
    if (this.props.placeholder === false) {
      this.setState({ currentUser: ''});
    }
  }

  render() {


    
    const header = (
      <Navbar fixedTop inverse fluid pullLeft>
        <Navbar.Header pullLeft>
          <Navbar.Brand>
            <a href="/auth">Blitz Report</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav navbar pullLeft>
          <div className="compare-toggle-container">
            <Compare className="compare-button" onClick={this.props.toggleCompareMode} compareMode={this.props.compareMode}>Compare Mode</Compare>
          </div>
        </Nav>
        <Nav navbar pullRight bsClass="logout-button-container nav">
          <div className="user-container">
            <div className="username">{this.state.currentUser}</div>
            <div className="h-100" style={{minHeight: "50px"}}>
              <button className="logout-button">Sign Out</button>
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
