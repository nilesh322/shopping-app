import React, { Component } from "react";
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
import { API, BASE_URL } from "../API/api";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setUser } from "../../redux/action/loginAction";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      gender: "",
      emailId: "",
      password: "",
      confirm_password: "",
      signModal: true,
      header: "Register"
    };
  }

  modalToggle = () => {
    this.setState(prevState => ({
      signModal: !prevState.signModal
    }));
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    console.log("handle submit");
    let {
      first_name,
      gender,
      emailId,
      password,
      confirm_password
    } = this.state;
    let request_obj = {
      first_name: first_name,
      gender: gender,
      email: emailId,
      password: password,
      confirm_password: confirm_password
    };
    API.setSignUp(this.loginResponse, JSON.stringify(request_obj), BASE_URL);
    this.setState({ signModal: !this.state.signModal });
  };

  render() {
    let {
      header,
      first_name,
      gender,
      emailId,
      password,
      confirm_password
    } = this.state;
    console.log("states", this.state);
    return (
      <div>
        <Modal isOpen={this.state.signModal} toggle={this.modalToggle}>
          <ModalHeader toggle={this.modalToggle}>
            <label>{header}</label>
          </ModalHeader>
          <ModalBody>
            <Container>
              <Row className="mb-4">
                <Col sm={12}>
                  <Form>
                    <FormGroup row>
                      <Label for="first_name" sm={2}>
                        First Name
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          name="first_name"
                          id="first_name"
                          value={first_name}
                          onChange={this.handleOnChange}
                          placeholder="First Name"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="gender" sm={2}>
                        Gender
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="select"
                          name="gender"
                          id="gender"
                          required
                          onChange={this.handleOnChange}
                          value={gender}
                        >
                          <option value=""> Select Gender</option>
                          <option value="Male"> Male</option>
                          <option value="Female"> Female</option>
                        </Input>
                      </Col>
                    </FormGroup>
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
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="confirm_password" sm={2}>
                        Confirm Password
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="password"
                          name="confirm_password"
                          id="confirm_password"
                          value={confirm_password}
                          onChange={this.handleOnChange}
                          placeholder="Confirm Password"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup check row>
                      <Col sm={{ size: 5, offset: 2 }}>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                      </Col>
                      {/* <Col sm={{ size: 4, offset: 1 }}>
                        <Button>Reset</Button>
                      </Col> */}
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Container>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
