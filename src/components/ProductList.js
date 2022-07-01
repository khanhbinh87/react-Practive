import React, { Component } from 'react'
import ProductItem from './ProductItem'
import data from '../data.json'
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <ProductItem  data={data}/>
      </div>
    )
  }
}
