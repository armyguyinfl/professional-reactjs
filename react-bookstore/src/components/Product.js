import React, { Component }  from 'react';

import { companyColor } from '../styles/companyStyles';
import styles from './Product.module.css';

function Product() {
  return (
    <div className={styles.product}>
      <img src='/images/default.jpg' alt='Book cover' className='App-book-cover-photo' />
      <div style={companyColor}> {/* Inline style example using a global App.css style applied to the title */}
        <h1>Title</h1>
      </div>
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
