import React from 'react';
import { Container,Table, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { productData } from '../../redux/action/productAction';


class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data: [],
            category: '',
            brand: '',
            productName: '',
            price: '',
            image: '',
            description: ''

        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const {data, category, brand, productName, price, image, description} = this.state;
        let product_data = {
            "category": category,
            "brand": brand,
            "productName": productName,
            "price": price,
            "image": image,
            "description": description
        }

        // let tempdata = [];
        // tempdata.push(product_data);
        console.log("product obj", product_data);

        this.setState({
            data:product_data
        })
        console.log("datattttt", data)
        this.props.productData(product_data);
    }

    handlePriceChange = (e) => {
        // const re =/^[0-9\b]+$/;
        // let value=  event.target.value;
        // console.log("change", value)

        // if ( re.test(value)) { 
        //     console.log("change1", value)
        //     this.setState({
        //         price:value || ''
        //     })
        // }
        const re = /^[0-9\b]+$/;
        if (  e.target.value>0 || e.target.value === '' || re.test(e.target.value)) {
           this.setState({price: e.target.value || ''})
        }
        // nChange={event => this.setState({financialGoal: event.target.value.replace(/\D/,'')})}

    }


   
    handleChange =(event) => {
        this.setState({
           [event.target.id]: event.target.value
        })
    }

    render() {
        console.log("data=====", this.props);
        const {category, brand, productName, price, image, description} = this.state;
      return (
        <div className="productForm">
            <Container>
            <Row className="mb-4">
                <Col sm={12}>
                    <Form onSubmit={this.handleFormSubmit}>
                        <h2 style={{ marginTop: "15px"}}>Add Product Form</h2>
                        <FormGroup row>
                            <Label for="category" sm={2}>Category</Label>
                            <Col sm={8}>
                                <Input type="select" 
                                    name="category" 
                                    id="category"
                                    required
                                    onChange={this.handleChange}
                                     value={category} 
                                >
                                    <option value="">Select category</option>
                                    <option value="bike">Bike</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="camera">Camera</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="brand" sm={2}>Brand</Label>
                            <Col sm={8}>
                                <Input type="select" 
                                    name="brand"
                                    id="brand"
                                    required
                                    onChange={this.handleChange}
                                    value={brand} 
                                 >
                                    <option value="">Select brand</option>
                                    <option value = "splendor">Splendor</option>
                                    <option value= "shine">Shine</option>
                                    <option value="nokia">Nokia</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="productName" sm={2}>Product Name</Label>
                            <Col sm={8}>
                                <Input type="text" name="productName" required  id="productName" placeholder="Enter product name"
                                onChange={this.handleChange}
                                value={productName} 
                            />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="price" sm={2}>Product Price</Label>
                            <Col sm={8}>
                                <Input  name="price" id="price"         placeholder="Enter price" required
                                    
                                    onChange={this.handlePriceChange}
                                    value={price} 
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="image" sm={2}>Product Image</Label>
                            <Col sm={8}>
                                <Input type="file" name="image" id="image" 
                                onChange={this.handleChange} 
                                value={image} 
                                />
                                <FormText color="muted">
                                 Please select product image here.
                                </FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="description" sm={2}>Product Description</Label>
                            <Col sm={8}>
                                <Input type="textarea" name="description" id="description"
                                 onChange={this.handleChange}
                                 value={description} 
                            />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Table >
                    <thead>
                        <tr>
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
                            this.props.product.data && this.props.product.data.map(item => <tr>
                                <td>{item.category}</td>
                                <td>{item.brand}</td>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>{item.image}</td>
                                 <td>{item.description}</td>
                            </tr>)
                        }
                       
                    </tbody>
                </Table>
                
        </Row>
             </Container> 
            
        </div>
      )
    }
}


const mapStateToProps = (state) => {
    const { product } = state;
    return { product };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        productData
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
