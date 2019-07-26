import React from 'react';
import { Container,Table, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class ProductTable extends React.Component { 

 
    render(){
        let number = 1;
        let style ={
           textAlign: 'center'
        }
        let imgStyle ={
            height: "40px",
            width: '100px'
        }
        return(
        <div>
            <Row>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>ProductName</th>               
                            <th>Price</th>
                            <th>Image</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data && this.props.data.map(item => <tr>
                                <td>{number++}</td>
                                <td>{item.category}</td>
                                <td>{item.brand}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                {/* <td>{item.image}</td> */}
                                <td style={style}><img style={imgStyle} src={item.image} /></td>
                                 <td>{item.description}</td>
                            </tr>)
                        }
                       
                    </tbody>
                </Table>
                
        </Row>
        </div>
        )
    }
}