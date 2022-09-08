import React, { Component }  from 'react';

function Product() {
  return (
    <div>
      <img src='/images/default.jpg' alt='Book cover' className='App-book-cover-photo' />
      <h1>Title</h1>
      <div>by: Author</div>
      <div>published: year,country</div>
      <div>language: lang</div>
      <div>pages: num-pages</div>
      <div>price: $x</div>
      <p><button>Add to Cart</button></p>
    </div>
  );
}
export default Product;
