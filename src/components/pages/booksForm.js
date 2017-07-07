import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';

import {postBooks} from '../../actions/booksActions'

class BooksForm extends React.Component{
  constructor(props){
    super(props);
  }
  handleSubmit(){
    const book = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value
    }]
    this.props.postBooks(book);
  }
  render(){
    return(
      <div>
      <form>
      <div>
      <label htmlFor="title">Title </label><br/>
      <input type="text" id="title" ref="title" placeholder="Enter Title" />
      </div>
      <div>
      <label htmlFor="description">Description </label><br/>
      <input type="text" id="description" ref="description" placeholder="Enter Description" />
      </div>
      <div>
      <label htmlFor="price">Price </label><br/>
      <input type="text" id="price" ref="price" placeholder="Enter Price" />
      </div>
      <button onClick={this.handleSubmit.bind(this)} type="submit">Save Book</button>
      </form>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({postBooks}, dispatch)
}
export default connect(null, mapDispatchToProps)(BooksForm);
