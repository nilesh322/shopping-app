import React,{Component} from 'react';
import ProductListing from '../component/product-listing'

//redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { getViewMore } from '../redux/action/viewMoreActios';
import { getproductList } from '../redux/action/productAction';

class ViewMore extends Component{
    constructor(props) {
        super(props);
        this.state={ }; 
    }

    componentDidMount(){
        console.log("did mount in virw more", this.props);
    }

    render() {
        console.log("view more", this.props);
        const {data} = this.props.location.state ? this.props.location.state : [];
        const dataArr = this.props.getProductList;
        const id  = this.props.match.params.id;
        const list = dataArr.find( item => item._id === id);
        return (
            <div>
                <ProductListing products={list.brands} />
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const { getProductList } = state;
    return { getProductList };

};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getViewMore,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ViewMore);

// export default ViewMore;