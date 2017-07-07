"use strict"

// React
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

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

// Import Components
import BooksList from './components/pages/bookList';

render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
)

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
    description: "Does anything change",
    price: 43.33
  }]
))
