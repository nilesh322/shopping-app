
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav,NavItem } from 'react-bootstrap';


export default class CategoryBar extends React.Component{
    render() {
        return (
           <Navbar bg="dark" variant="dark" style={{ margin: "auto", width: "1000px" }}>
              <Navbar.Brand>
              </Navbar.Brand>
              <Nav className="mr-auto">
               <Link style={{color: "white"}} to='/' >Home {"  "}
               </Link>
                <Link style={{color: "white", marginLeft:"10px"}} to='/addproduct' >Add-Product
               </Link>
              </Nav>
          </Navbar>
        );
    }
}