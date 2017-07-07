import React from 'react';

class BooksForm extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <form>
      <label htmlFor="title">Title </label>
      <input type="text" id="title" ref="title" placeholder="Enter Title" />
      <label htmlFor="description">Description </label>
      <input type="text" id="description" ref="description" placeholder="Enter Description" />
      <label htmlFor="price">Price </label>
      <input type="text" id="price" ref="price" placeholder="Enter Price" />
      <button type="submit">Save Book</button>
      </form>
      </div>
    )
  }
}

export default BooksForm;
