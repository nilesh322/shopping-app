
import React from 'react';
import { Navbar, Nav,NavItem } from 'react-bootstrap';


export default class CategoryBar extends React.Component{
    render() {
        return (
           <Navbar bg="dark" variant="dark" style={{margin: "0px 15px 15px"}}>
              <Navbar.Brand>
                <a href="#">Category</a>
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#">Bike</Nav.Link>
                <Nav.Link href="#">Mobile</Nav.Link>
                <Nav.Link href="#">Camera</Nav.Link>
              </Nav>
            {/* <Nav>
              <NavItem href="#">
                Byke
              </NavItem>
            </Nav> */}
          </Navbar>
        );
    }
}