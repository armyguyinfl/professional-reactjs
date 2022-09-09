import React, { Component }  from 'react';

import Product from './Product';
import styles from './ProductList.module.css';

function ProductList(props) {
  return (
    <ul className={styles.productList}>
      {/* Loops through dataset and generate list items with product data which is available via props */}
      {props.products.map(product => ( 
         <li key={product.id} className={styles.productListItem}><Product {...product} /></li>
      ))}
    </ul>
  );
}
export default ProductList;
