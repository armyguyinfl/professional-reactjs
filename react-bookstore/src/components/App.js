import React, { Component }  from 'react';
import './App.css';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import productsData from '../data/products';

function App() {
  return (
    <div className="container">
      <Header />
      <Main products={productsData} />
      <Footer />
    </div>
  );
}

export default App;
