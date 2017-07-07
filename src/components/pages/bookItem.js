import React from 'react';

class BookItem extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h6>{this.props.title}</h6>
        <h6>{this.props.description}</h6>
        <h6>{this.props.price}</h6>
        <button>Buy Now</button>
      </div>
    )
  }
}
export default BookItem;
