import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col } from 'react-bootstrap';

class UpperBar extends Component {

    render() {
      return (
        <Navbar  > 
          <Container>
          <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto"> 
      <Nav.Link href="/" >Home </Nav.Link> 
      <Nav.Link href="/actors">Actors
         </Nav.Link>  
         <Nav.Link href="/movies" >Movies </Nav.Link> 
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
         
      )
    }
  }

  export default UpperBar;