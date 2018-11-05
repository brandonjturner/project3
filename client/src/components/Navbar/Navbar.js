import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class UserNav extends Component {
  render() {
    
    const header = (
      <Navbar fixedTop inverse fluid pullLeft bsClass="navbar">
        <Navbar.Header pullLeft>
          <Navbar.Brand>
            <a href="#">Football?</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav navbar pullLeft>
          <NavItem href="#" pullLeft >
            Basic
          </NavItem>
          <NavItem href="#" pullLeft>
            Advanced
          </NavItem>
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
