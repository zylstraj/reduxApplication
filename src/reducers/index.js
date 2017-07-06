"use strict"

import {combineReducers} from 'redux';

// Import Reducers to be combineReducers
import {booksReducers} from './booksReducers';

// Combine the reducers
export default combineReducers({
  books: booksReducers
})
// import reducers under one state object. 
