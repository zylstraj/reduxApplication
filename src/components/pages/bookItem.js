import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addToCart} from '../../actions/cartActions';

class BookItem extends React.Component{
  constructor(props){
    super(props)
  }
  handleCart(){
    const book = [...this.props.cart, {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      price: this.props.price
    }]
    this.props.addToCart(book);
  }
  render(){
    return(
      <div>
        <h6>{this.props.title}</h6>
        <h6>{this.props.description}</h6>
        <h6>{this.props.price}</h6>
        <button onClick={this.handleCart.bind(this)}>Buy Now</button>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    cart: state.cart.cart
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addToCart: addToCart
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
