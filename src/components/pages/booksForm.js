import React from 'react';

class BooksForm extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <form>
      <div>
      <label htmlFor="title">Title </label><br/>
      <input type="text" id="title" ref="title" placeholder="Enter Title" />
      </div>
      <div>
      <label htmlFor="description">Description </label><br/>
      <input type="text" id="description" ref="description" placeholder="Enter Description" />
      </div>
      <div>
      <label htmlFor="price">Price </label><br/>
      <input type="text" id="price" ref="price" placeholder="Enter Price" />
      </div>
      <button type="submit">Save Book</button>
      </form>
      </div>
    )
  }
}

export default BooksForm;
