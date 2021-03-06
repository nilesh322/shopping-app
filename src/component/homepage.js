import React,{Component} from 'react';
import ProductListing from './product-listing';
import data from '../data/product1.json';
import {API,BASE_URL} from '../component/API/api';
import { Button } from 'reactstrap';
import {  Redirect,Link } from "react-router";

//redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { getproductList } from '../redux/action/productAction';

 class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state={ }; 


        this.resposeStandard = {
            error: err => {
                console.log('err=>', err);
            },
            complete: () => {
                console.log('complete=>');
            },
        };

        this.productResponse = Object.assign({}, this.resposeStandard, {
            success: response => {
                 this.props.getproductList(response);
            },
        }); 
    }

    componentDidMount() {
        API.getProduct(this.productResponse, '', BASE_URL);
    }

    render() {
        // console.log("homepage product",this.props);
        let dataList = this.props.getProductData; 
        return (
            <div>
                    { dataList.map((category, keyIndex)=> {
                        return( <div key={category._id}>
                            <h3 style={{marginLeft: "170px",marginTop: "8px"}}>{category.name}
                            
                            <Button onClick={()=>this.props.history.push('/viewmore/'+ category._id)}  className="viewMore">
                                View More
                            </Button> 

                            </h3>
                            <ProductListing
                                {...this.props}
                                category = {category.name} 
                                products = {dataList[keyIndex].brands} 
                                display={3} 
                                keyIndex={keyIndex}
                            />
                        </div>)
                    })}
             
            </div>
        )
    } 
} 

const mapStateToProps = (state) => {
    const { getProductData } = state;
    return { getProductData };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getproductList
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
