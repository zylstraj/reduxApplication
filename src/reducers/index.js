"use strict"

import {combineReducers} from 'redux';

// Import Reducers to be combineReducers
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

// Combine the reducers
export default combineReducers({
  books: booksReducers,
  cart: cartReducers
})
// import reducers under one state object.
