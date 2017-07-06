"use strict"
import {createStore} from 'redux';

// IMPORT COMBINED Reducers
import reducers from './reducers/index';

// Step 1 create the store
const store = createStore(reducers)

store.subscribe(function() {
  console.log('current state is: ', store.getState());
  // console.log('current price is: ', store.getState()[1].price);
})

// Step 2 create and dispatch actions
store.dispatch({
  type: "POST_BOOK",
  payload: [{
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
})

store.dispatch({
  type: "DELETE_BOOK",
  payload:
    {id: 1}
})
store.dispatch({
  type: "UPDATE_BOOK",
  payload: {
    id: 2,
    title: "Let the games begin."
  }
})
