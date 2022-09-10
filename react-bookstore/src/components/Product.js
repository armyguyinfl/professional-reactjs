import React, { Component }  from 'react';

import { companyColor } from '../styles/companyStyles';
import styles from './Product.module.css';

function Product(props) {
  {/* Inside Product (outside of the return statement), deconstruct the props object
      into individual constants (to save yourself) from having to type 'props.'
      repeatedly in the return statement. Otherwise, {props.price} would be required. */}
  let { title, author, published, country, lang, pages, image, url, price } = props;

  return (
    <div className={styles.product}>
      <a href={url ? url: null} target='_blank'>
        <img src={image ? 'images/' + image:'images/default.jpg'} alt={title} title={title} className={styles.thumbnail} />
      </a>
      <div style={companyColor}> {/* Inline style example using a global App.css style applied to the title */}
        <h1>{title}</h1>
      </div>
      <div>by: {author}</div>
      <div>published: {published}, {country}</div>
      <div>language: {lang}</div>
      <div>pages: {pages}</div>
      <div>price: ${price}</div>
      <p><button>Add to Cart</button></p>
    </div>
  );
}
export default Product;
