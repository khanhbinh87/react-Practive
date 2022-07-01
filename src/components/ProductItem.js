import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>ProductItem</div>
    )
  }
}
