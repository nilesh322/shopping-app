import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  Button,
  MenuItem,
  Glyphicon
} from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          {/* <i className="fa fa-envelope fa-fw"></i>  */}
          <Navbar.Brand>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              {" "}
              Shopping Cart
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Product</Nav.Link> */}
          </Nav>
          <Nav>
            <Link className="login-logo" to="/login">
              Login
            </Link>
          </Nav>
          <Nav className="mr-3">
            <DropdownButton alignRight id="dropdown-menu-align-right">
              <Dropdown.Item eventKey="1">Log out</Dropdown.Item>
            </DropdownButton>
          </Nav>
          <Nav>
            <Link
              style={{ color: "white", margin: "auto" }}
              to="/cart"
              className="cart-button"
            >
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
  };
}

export default connect(mapStateToProps)(Header);
