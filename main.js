import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProiductTable from './App.jsx';
import products from './data.js';

console.log(products); 

ReactDOM.render(
  <FilterableProiductTable products={products}/>,
  document.getElementById('app')
);
