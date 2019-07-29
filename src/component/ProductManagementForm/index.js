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
import InputBox from "../shared/input";

//redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  productData,
  getCategoryList,
  getAllProductList
} from "../../redux/action/productAction";
import { getAllBrandList } from "../../redux/action/brandListAction";
import { API, BASE_URL } from "../API/api";

var imageSourceCode;
class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "",
      //   category: {
      //     category_name: "",
      //     category_id: ""
      //   },
      brand: "",
      productName: "",
      price: "",
      images: [],
      description: "",
      discount: null,
      warranty: "",

      //general
      in_the_box: "",
      model_name: "",
      model_number: "",
      color: "",
      sim_type: "",
      touchScreen: "",
      quick_charging: "",

      //display_feature
      size: "",
      resolution: "",
      resolution_type: "",
      other_features: "",
      brightness: "",
      contrast_ratio: "",
      analog_tv_reception: "",
      view_angle: "",
      panel_type: "",
      digital_noise_filter: "",
      aspect_ratio: "",

      //memory_storage
      internal_storage: "",
      ram: "",
      expandable: "",

      //camera
      primary_camera: "",
      secondary_camera: "",
      flash: false,
      hd_recording: false,

      //connectivity_feature
      network_type: "",
      supported_network: "",
      bluetooth: "",
      bluetooth_version: "",
      wifi: "",
      wifi_version: "",
      usb_3_0_slots: "",
      usb_2_0_slots: "",
      headphone_jack: true,

      //smart_tv_feature
      supported_apps: "",
      operating_system: "",
      screen_mirroring: "",
      content_providers: "",
      supported_devices_for_casting: "",

      highlight: []
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
        this.props.getAllProductList(response);
      }
    });
    this.allBrandResponse = Object.assign({}, this.resposeStandard, {
      success: response => {
        console.log("all brand list", response);
        this.props.getAllBrandList(response);
      }
    });
  }

  componentDidMount() {
    API.getCategories(this.categoriesResponse, "", BASE_URL);
    API.getAllProduct(this.allProductResponse, "", BASE_URL);
    API.getBrand(this.allBrandResponse, "", BASE_URL);
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
      description,
      warranty,
      discount
    } = this.state;
    let request_obj = {
      category_id: category,
      //   category: category.category_name,
      brand: brand,
      name: productName,
      price: price,
      // "images": imageSourceCode,
      images: images,
      description: description,
      warranty: warranty,
      discount: discount
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
      description,
      discount,
      warranty,
      in_the_box,
      model_name
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
                      onChange={this.handleChange}
                      value={category}
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
                      type="select"
                      name="brand"
                      required
                      id="brand"
                      placeholder="Enter brand name"
                      onChange={this.handleChange}
                      value={brand}
                    >
                      {this.props.getBrandListData &&
                        this.props.getBrandListData
                          .filter(brand => {
                            return brand.category_id === category;
                          })
                          .map((brand, key) => {
                            return (
                              <option value={brand._id} key={key}>
                                {brand.name}
                              </option>
                            );
                          })}
                    </Input>
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
                <FormGroup row>
                  <Label for="discount" sm={2}>
                    Discount
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="number"
                      name="discount"
                      required
                      id="discount"
                      placeholder="Enter discount"
                      onChange={this.handleChange}
                      value={discount}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="warranty" sm={2}>
                    Warranty
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="warranty"
                      required
                      id="warranty"
                      placeholder="Enter warranty details"
                      onChange={this.handleChange}
                      value={warranty}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="in_the_box" sm={2}>
                    In the box
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="in_the_box"
                      id="in_the_box"
                      placeholder="Enter box details"
                      onChange={this.handleChange}
                      value={in_the_box}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="model_name" sm={2}>
                    Model name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="model_name"
                      id="model_name"
                      placeholder="Enter model name"
                      onChange={this.handleChange}
                      value={model_name}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
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
                </FormGroup>
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
            productData={this.props.getProductData}
            imageSourceCode={this.imageSourceCode}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    product,
    getProductData,
    getCategoryListData,
    getBrandListData
  } = state;
  return { product, getProductData, getCategoryListData, getBrandListData };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      productData,
      getCategoryList,
      getAllProductList,
      getAllBrandList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
