import React from 'react';
import { connect } from 'react-redux';
import { Table,  Container, Row, Col } from 'reactstrap';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getTotal(){
        return (this.props.cart.map(({price,quantity}) => price * quantity)).reduce((a,b) => a + b, 0);
    }
    render() {
        return (<div className="cart">

            <Container>
            <Table >
            <thead>
                <tr>
                    <th>Item</th>
                    <th></th>
                    <th>Qty</th>               
                    <th></th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.cart.map(item => <tr>
                        <td>{item.name}</td>
                        <td><button onClick={() => this.props.addToCart(item)} >+</button></td>
                        <td>{item.quantity}</td>
                        <td><button onClick={() => this.props.removeFromCart(item)} >-</button></td>
                        <td>{item.price * item.quantity}</td>
                        <td><button onClick={() => this.props.removeAllFromCart(item)} >Remove all from cart</button></td>
                    </tr>)
                }
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><b>Total : </b>{this.getTotal()}</td>
                </tr>
            </tbody>
        </Table>
           
           </Container>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            console.log(item)
            dispatch({type: 'REMOVE', payload: item})
        },
        removeAllFromCart: (item) => {
            dispatch({type: 'REMOVE_ALL', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Cart)