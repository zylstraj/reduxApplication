"use strict"

// Get a Book
// No payload as it's just requesting data from the DB
export function getBooks(book) {
  return {
    type: "GET_BOOKS"
  }
}

//Post a Book
export function postBooks(book) {
  return {
    type: "POST_BOOK",
    payload: book
  }
}
// Delete a Books
export function deleteBooks(id) {
  return {
    type: "DELETE_BOOK",
    payload: id
  }
}

// Update a Book
export function updateBooks(book) {
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
}
