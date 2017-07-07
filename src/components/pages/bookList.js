"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';

import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';

class BooksList extends React.Component{
  componentDidMount(){
    // Dispatch an action
    this.props.getBooks();
  }
  render() {
    console.log('We are accessing state', this.props.books)
    const bookList = this.props.books.map(function(booksArr) {
      return(
        <div key={booksArr.id}>
          <BookItem
            id={booksArr.id}
            title={booksArr.title}
            description={booksArr.description}
            price={booksArr.price}/>
        </div>
      )
    })
    return(
      <div>
      <Cart />
      <h1>Hello React</h1>
      <BooksForm />
      {bookList}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBooks:getBooks
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
