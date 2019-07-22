import React,{Component} from 'react';
import ProductListing from './product-listing';
import data from '../data/product1.json';
import {API,BASE_URL} from '../component/API/api';
import { Button } from 'reactstrap';

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
                console.log("home product list", response);
                 this.props.getproductList(response);
            },
        }); 
    }

    componentDidMount() {
        API.getProduct(this.productResponse, '', BASE_URL);
    }

    render() {
        console.log("homepage product",this.props);
        let dataList = this.props.getProductList; 
        return (
            <div>
                    { dataList.map(function(category, keyIndex) {
                        return( <div>
                            <h3 style={{marginLeft: "170px",marginTop: "8px"}}>{category.name}
                            
                            <Button onClick={()=>this.props.history.push('/viewmore',{data:this.props.products})}  className="viewMore">
                                View More
                            </Button> 
                            
                            </h3>
                            <ProductListing
                                category = {category.name} 
                                products = {dataList[keyIndex].brands} 
                                display={3} 
                                // {...this.props}
                                keyIndex={keyIndex}
                            />
                        </div>)
                    })}
             
            </div>
        )
    } 
} 

const mapStateToProps = (state) => {
    const { getProductList } = state;
    return { getProductList };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getproductList
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

// export default Homepage;
