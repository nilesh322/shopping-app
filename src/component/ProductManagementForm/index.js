import React from "react";
import {
  Container,
  Table,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import ProductTable from "./productTable";

//redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  productData,
  getCategoryList,
  getAllProductList
} from "../../redux/action/productAction";
import { API, BASE_URL, ADD_PRODUCT_URL } from "../API/api";

var imageSourceCode;
class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: {
        category_name: "",
        category_id: ""
      },
      brand: "",
      productName: "",
      price: "",
      images: [],
      description: ""
    };

    this.resposeStandard = {
      error: err => {
        console.log("err=>", err);
      },
      complete: () => {
        console.log("complete=>");
      }
    };

    this.categoriesResponse = Object.assign({}, this.resposeStandard, {
      success: response => {
        console.log("response=====", response);
        this.props.getCategoryList(response);
      }
    });
    this.allProductResponse = Object.assign({}, this.resposeStandard, {
      success: response => {
        console.log("all product list", response);
        // this.props.getAllProductList(response);
      }
    });
  }

  componentDidMount() {
    API.getCategories(this.categoriesResponse, "", BASE_URL);
    API.getAllProduct(this.allProductResponse, "", BASE_URL);
    // API.setProduct(this.productResponse, '', BASE_URL);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const {
      data,
      category,
      brand,
      productName,
      price,
      images,
      description
    } = this.state;
    let request_obj = {
      category_id: category.category_id,
      //   category: category.category_name,
      brand: brand,
      name: productName,
      price: price,
      // "images": imageSourceCode,
      // "images": images,
      description: description
    };
    this.setState({
      data: request_obj
    });
    console.log("datax", data);
    this.props.productData(request_obj);
    API.setProduct(
      this.allProductResponse,
      JSON.stringify(request_obj),
      BASE_URL
    );
  };

  handlePriceChange = e => {
    console.log("value", Number(e.target.value), 0);
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ price: e.target.value || "" });
    }
  };

  onFileUpload = e => {
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.addEventListener(
      "load",
      function() {
        imageSourceCode = reader.result;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }

    // this.setState({ images: [...this.state.images, ...e.target.files] })
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleCategoryChange = event => {
    console.log("category event", event.target.name, event.target.value);
    this.setState({
      category: {
        category_name: event.target.name,
        category_id: event.target.value
      }
    });
  };

  render() {
    console.log("data=====", this.state);
    console.log("product props=====", this.props);
    const {
      category,
      brand,
      productName,
      price,
      images,
      description
    } = this.state;
    return (
      <div className="productForm">
        <Container>
          <Row className="mb-4">
            <Col sm={12}>
              <Form onSubmit={this.handleFormSubmit}>
                <h2 style={{ marginTop: "15px" }}>Add Product Form</h2>
                <FormGroup row>
                  <Label for="category" sm={2}>
                    Category
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="select"
                      name="category"
                      id="category"
                      onChange={this.handleCategoryChange}
                      value={this.state.category}
                    >
                      {this.props.getCategoryListData &&
                        this.props.getCategoryListData.map((category, key) => {
                          return (
                            <option value={category._id} key={key}>
                              {category.name}
                            </option>
                          );
                        })}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="brand" sm={2}>
                    Brand
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="brand"
                      required
                      id="brand"
                      placeholder="Enter brand name"
                      onChange={this.handleChange}
                      value={brand}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="productName" sm={2}>
                    Product Name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="productName"
                      required
                      id="productName"
                      placeholder="Enter product name"
                      onChange={this.handleChange}
                      value={productName}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="price" sm={2}>
                    Product Price
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="Enter price"
                      required
                      onChange={e => this.handlePriceChange(e)}
                      value={price}
                    />
                  </Col>
                </FormGroup>
                {/* <FormGroup row>
                  <Label for="image" sm={2}>
                    Product Image
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="file"
                      name="image"
                      id="image"
                      onChange={this.onFileUpload}
                      multiple
                    />

                    <FormText color="muted">
                      Please select product image here.
                    </FormText>
                  </Col>
                </FormGroup> */}
                <FormGroup row>
                  <Label for="description" sm={2}>
                    Product Description
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      placeholder="Enter product descrption"
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
    );
  }
}

const mapStateToProps = state => {
  const { product, getProductData, getCategoryListData } = state;
  return { product, getProductData, getCategoryListData };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      productData,
      getCategoryList,
      getAllProductList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
