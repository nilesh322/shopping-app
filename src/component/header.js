import React from 'react';
import { Link } from 'react-router-dom';
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

            {/* <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>   */}

      </div>
    );
  }
}


export default Header;