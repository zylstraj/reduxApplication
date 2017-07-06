"use strict"
import {createStore} from 'redux';

// Step 3 define reducers
const reducer = function(state={books:[]}, action) {
  // what to do with the received action - if action type equals increment - we will update the state adding the payload
  // need to set initial value to state, otherwise won't be able to add payload
  switch(action.type) {
    case "POST_BOOK":
    // Non-spread operator
    // let books = state.books.concat(action.payload);
    // return {books};
    // Spread operator - es6
    return {books: [...state.books, ...action.payload]}
    break;
  }
  return state
}

// Step 1 create the store
const store = createStore(reducer)

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
  type: "POST_BOOK",
  payload: [{
    id: 3,
    title: "Good Times",
    description: "This is the 3rd book description",
    price: 50.00
  }]
})
