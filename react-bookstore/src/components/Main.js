import React, { Component }  from 'react';

import Cart from './Cart';
import ProductList from './ProductList';

function Main() {
  return (
    <main className='row'>
        <div className='col-md-8'><ProductList /></div>
        <div className='col-md-4'><Cart /></div>
    </main>
  );
}
export default Main;
