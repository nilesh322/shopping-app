import React, { Component } from 'react';
import { Col,Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import {USERDATA} from '../../redux/types';

//redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { setUser } from '../../redux/action/loginAction';


class Login extends Component { 
    constructor(props) {
        super(props);
        this.state={
            header: 'Sign In',
            emailId: "",
            errorEmailId: "",
            password: "",
            errorPassword: "",
        }
    }

    componentDidMount() {
        this.props.hideHeader();
    }
    

    // handleOnChange = (event) => {
    //     console.log("onchange====", event.target.value);
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     })
    // }


    handleOnChange = ({ target: { name, value } }) => {
        this.setState({
        [name]: value
        })
    }

    handleLogin = async() => {
      
        let { password, emailId } = this.state;
        await localStorage.setItem(USERDATA, JSON.stringify({ password, emailId }));
        this.props.setUser({ password, emailId });
      
    }

    _renderLogin = () => {
        let { emailId, password, errorEmailId, errorPassword } = this.state;
        return (
          <div className='loginMainDiv'>
            <div className="labelDiv">
              <Label className="label">Email : </Label>
            </div>
            <div className="inputDiv">
              <Input
                type="email"
                name="emailId"
                value={emailId}
                onChange={this.handleOnChange}
                placeholder="Email" />
                <p className="error">{errorEmailId}</p>
            </div>
    
            <div className="labelDiv">
              <Label className="label">Password : </Label>
            </div>
            <div className="inputDiv">
              <Input
                type="password"
                name="password"
                value={password}
                onChange={this.handleOnChange}
                placeholder="Password" />
                <p className="error">{errorPassword}</p>
            </div>
            <div className="buttonDiv">
              <Button className="button" onClick={this.handleLogin} >Login</Button>
            </div>
          </div>
        )
      }
    
      render() {
        let { header } = this.state;
        console.log("login props", this.props);
        return (
          <div className="login">
            {/* <Loading isLoading={isLoading} label={loadingText} /> */}
            <div className="headerDiv">
              <label className="headerLabel">{header}</label>
            </div>
            <div className="detailsMainDiv">
              {this._renderLogin()}
            </div>
          </div>
        );
      }

    // render() {
    //     let { header,emailId, password} = this.state;
    //     console.log("render===", this.state);
    //     return (
    //     <div className="productForm">
    //         <div className="text-center">
    //             <h4 >{header}</h4>
    //         </div>
    //         <div>
    //             <Container>
    //                 <Row className="mb-4">
    //                 <Col sm={12}>
    //                 <Form >
    //                 <FormGroup row>
    //                 <Label for="emailId" sm={2}>Email</Label>
    //                 <Col sm={4}>
    //                     <Input 
    //                         type="email" 
    //                         name="emailId" 
    //                         id="emailId"
    //                         value={emailId}
    //                         onChange={this.handleOnChange}
    //                         placeholder="Email" 
    //                     />
    //                 </Col>
    //                 </FormGroup>
    //                 <FormGroup row>
    //                 <Label for="password" sm={2}>Password</Label>
    //                 <Col sm={4}>
    //                     <Input
    //                         type="password" 
    //                         name="password"
    //                         id="password" 
    //                         value={password}
    //                         onChange={this.handleOnChange}
    //                         placeholder="Password" 
    //                     />
    //                 </Col>
    //                 </FormGroup>
    //                 <FormGroup check row>
    //                     <Col sm={{ size: 10, offset: 2 }}>
    //                         <Button onClick={this.handleLogin} >Login</Button>
    //                     </Col>
    //                 </FormGroup>
    //                 </Form>
    //                 </Col>
    //             </Row>
    //         </Container>
    //         </div>
    //     </div>
    //     )
    // }
}

const mapStateToProps = (state) => {
    const { userData } = state;
    return { userData };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
       setUser
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

