"use strict"
import {createStore} from 'redux';

// Step 3 define reducers
const reducer = function(state={}, action) {
  // what to do with the received action - if action type equals increment - we will update the state adding the payload
  // need to set initial value to state, otherwise won't be able to add payload
  switch(action.type) {
    case "POST_BOOK":
    return state = action.payload;
    break;
  }
  return state
}

// Step 1 create the store
const store = createStore(reducer)

store.subscribe(function() {
  console.log('current state is: ', store.getState())
})

// Step 2 create and dispatch actions
store.dispatch({
  type: "POST_BOOK",
  payload: {
    id: 1,
    title: "Fun Times",
    description: "This is a book description",
    price: 33.33
  }
})
