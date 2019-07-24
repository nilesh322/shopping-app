import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Navbar, Nav, Form, FormControl,Button ,MenuItem,Glyphicon } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
        <div>
          <Navbar bg="dark" variant="dark">
            {/* <i className="fa fa-envelope fa-fw"></i>  */}
            <Navbar.Brand >
              <Link style={{textDecoration: 'none', color: 'white'}} to='/'> Shopping Cart</Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
              {/* <Nav.Link href="#home">Product</Nav.Link> */}
            </Nav>
            <Nav>
              {/* <span style={{color: "white", margin: "auto"}}>{this.props.cart && this.props.cart.length}</span> */}
               {/* <Nav.Link  onClick={()=>browserHistory.push('/cart')} ><i className="glyphicon glyphicon-shopping-cart"></i> Cart </Nav.Link> */}
               
               <Link style={{color: "white", margin: "auto"}} to='/cart' className='cart-button'>
                Cart ({this.props.cart && this.props.cart.length})
               </Link>
            </Nav>
          </Navbar>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      cart: state.cart
  }
}

export default connect(mapStateToProps)(Header);

