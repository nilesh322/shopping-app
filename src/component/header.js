import React from 'react';

import { Navbar, Nav, Form, FormControl,Button ,MenuItem,Glyphicon } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
       
        <i className="fa fa-envelope fa-fw"></i> 
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Product</Nav.Link>
        </Nav>
        {/* <li>
          <span class="glyphicon glyphicon-shopping-cart"></span><br/>
          <span class="glyphicon-class">glyphicon glyphicon-shopping-cart</span>
        </li> */}
      
      </Navbar>
      </div>
    );
  }
}


export default Header;