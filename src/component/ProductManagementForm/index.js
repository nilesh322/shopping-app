import React from 'react';
import { Container,Table, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ProductTable from './productTable';

//redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { productData } from '../../redux/action/productAction';

var imageSourceCode
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
            "image": imageSourceCode,
            "description": description
            
        }
        this.setState({
            data:product_data
        })
        console.log("datattttt", data)
        this.props.productData(product_data);
    }

    handlePriceChange = (e) => {
      console.log("value", Number(e.target.value),0);
        const re = /^[0-9\b]+$/;
        if (  Number(e.target.value) > 0 && (e.target.value === '' || re.test(e.target.value))) {
           this.setState({price: e.target.value || ''})
        }
    }

    handleFileChange = (e) => {
      
            var file    = document.querySelector('input[type=file]').files[0];
            var reader  = new FileReader();

            reader.addEventListener("load", function () {
                imageSourceCode = reader.result;
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        // let files = e.target.files;
        // this.setState({
        //     image: files
        // })

        
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
                                <Input name="price" id="price"         placeholder="Enter price" required
                                    
                                    onChange={(e) => this.handlePriceChange(e)}
                                    value={price} 
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="image" sm={2}>Product Image</Label>
                            <Col sm={8}>
                                <Input type="file" name="image" id="image" 
                                onChange={this.handleFileChange} 
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
                <ProductTable 
                    data={this.props.product.data}
                    imageSourceCode={this.imageSourceCode}
                />
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
