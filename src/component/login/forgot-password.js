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

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      forgotPasswordModal: true,
      header: "Forgot Password"
    };
  }

  modalToggle = () => {
    this.setState(prevState => ({
      forgotPasswordModal: !prevState.forgotPasswordModal
    }));
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    console.log("handle submit");
    this.setState({ forgotPasswordModal: !this.state.forgotPasswordModal });
  };

  render() {
    let { emailId, header } = this.state;
    return (
      <div>
        <Modal
          isOpen={this.state.forgotPasswordModal}
          toggle={this.modalToggle}
        >
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
                      </Col>
                    </FormGroup>
                    <FormGroup check row>
                      <Col sm={{ size: 5, offset: 2 }}>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                      </Col>
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
export default ForgotPassword;
