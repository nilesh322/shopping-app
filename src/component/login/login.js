import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { USERDATA } from "../../redux/types";
import { API, BASE_URL } from "../API/api";

//redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setUser } from "../../redux/action/loginAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Sign In",
      emailId: "",
      errorEmailId: "",
      password: "",
      errorPassword: "",
      loginModal: true
    };

    this.resposeStandard = {
      error: err => {
        console.log("err=>", err);
      },
      complete: () => {
        console.log("complete=>");
      }
    };
    this.loginResponse = Object.assign({}, this.resposeStandard, {
      success: response => {
        console.log("response=====", response);
      }
    });
  }

  modalToggle = () => {
    this.setState(prevState => ({
      loginModal: !prevState.loginModal
    }));
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleLogin = async () => {
    let { password, emailId } = this.state;
    await localStorage.setItem(USERDATA, JSON.stringify({ password, emailId }));

    this.props.setUser({ password, emailId });
    let request_obj = {
      email: emailId,
      password: password
    };
    // localStorage.setItem("Authorization");
    API.setLogin(this.loginResponse, JSON.stringify(request_obj), BASE_URL);
    // debugger;
    console.log("response", this.loginResponse);
    this.setState({ loginModal: !this.state.loginModal }),
      () => history.replace("/");
  };

  render() {
    let {
      header,
      emailId,
      password,
      errorEmailId,
      errorPassword,
      loginModal
    } = this.state;
    console.log("login props", this.props);
    return (
      <div>
        {/* {loginModal && ( */}
        <Modal isOpen={this.state.loginModal} toggle={this.modalToggle}>
          <ModalHeader toggle={this.modalToggle}>
            <label>{header}</label>
          </ModalHeader>
          <ModalBody>
            <Container>
              <Row className="mb-4">
                <Col sm={12}>
                  <Form>
                    <FormGroup row>
                      <Label for="emailId" sm={2}>
                        Email
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="email"
                          name="emailId"
                          id="emailId"
                          value={emailId}
                          onChange={this.handleOnChange}
                          placeholder="Email"
                        />
                        <p className="error">{errorEmailId}</p>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="password" sm={2}>
                        Password
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          value={password}
                          onChange={this.handleOnChange}
                          placeholder="Password"
                        />
                        <p className="error">{errorPassword}</p>
                      </Col>
                    </FormGroup>
                    <FormGroup check row>
                      <Col className="text-center">
                        <Button onClick={this.handleLogin}>Login</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
              <Row className="forgot-pass">
                <Col sm={{ size: 5, offset: 2 }}>
                  <Link to="/forgot-password">Forgot Password? </Link>
                </Col>
                <Col sm={{ size: 4, offset: 1 }}>
                  <Link to="/Signup">Sign Up</Link>
                </Col>
              </Row>
            </Container>
          </ModalBody>
        </Modal>
        {/* )} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userData } = state;
  return { userData };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
