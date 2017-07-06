"use strict"
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINED Reducers
import reducers from './reducers/index';

// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// Step 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// store.subscribe(function() {
//   console.log('current state is: ', store.getState());
//   // console.log('current price is: ', store.getState()[1].price);
// })

// Step 2 create and dispatch actions
store.dispatch(postBooks(
  [{
    id: 1,
    title: "Fun Times",
    description: "This is a book description",
    price: 33.33
  },
  {
    id: 2,
    title: "Fun Times",
    description: "This is a book description",
    price: 43.33
  }]
))

store.dispatch(deleteBooks(
  {id: 1}
))
store.dispatch(updateBooks(
  {
    id: 2,
    title: 'Let the games begin or Learn React'
  }
))

// -->> CART ACTIONS <<--
store.dispatch(addToCart([{id: 1}]))
