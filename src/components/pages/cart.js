import React from 'react';
import {connect} from 'react-redux';

class Cart extends React.Component{
  constructor(props){
    super(props);
  }
  // showing the conditional nature of react.
  renderEmpty(){
    return(<div></div>)
  }
  renderCart(){
    const cartItemsList = this.props.cart.map(function(cartArr){
      return(
        <div key={cartArr._id}>
          <h6>{cartArr.title}</h6>
          <h6>{cartArr.price}</h6>
          <h6>qty.</h6>
          <button>Add</button>
          <button>Remove</button>
          <button>Delete</button>
        </div>
      )
    })
    return(
      <div>
      {cartItemsList}
      </div>
    )
  }
  render(){
    if(this.props.cart[0]){
      return this.renderCart();
    } else {
      return this.renderEmpty()
    }
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart.cart
  }
}
export default connect(mapStateToProps)(Cart);
