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
export default class ProductTable extends React.Component {
  render() {
    let number = 1;
    let style = {
      textAlign: "center"
    };
    let imgStyle = {
      height: "40px",
      width: "100px"
    };
    return (
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
                {/* <th>Image</th> */}
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.productData &&
                this.props.productData.map((item, key) => (
                  <tr>
                    <td>{number++}</td>
                    <td>{item.category_id}</td>
                    <td>{item.brand.name}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    {/* <td>{item.image}</td> */}
                    {/* <td style={style}>
                      <img style={imgStyle} src={item.image} />
                    </td>*/}
                    <td>{item.brand.description}</td>
                    <td>
                      <i class="glyphicon glyphicon-pencil" />

                      {/* <i class="far fa-eye"></i> */}
                      {/* <i class="far fa-trash-alt" /> */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </div>
    );
  }
}
