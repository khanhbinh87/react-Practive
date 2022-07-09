import { Component } from "react";
import Cart from "./components/Xe/Cart";
// import Modal from "./components/Xe/ModalCart";
// import ProductList from "./components/Xe/ProductList";

export default class App extends Component {
  state = {
    product: {
      id: 1,
      name: "black car",
      img: "./img/black-car.jpg",
      price: 1000,
    },
  };

  listProducts = [
    {
      id: 1,
      name: "black car",
      img: "./img/black-car.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "red car",
      img: "./img/red-car.jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "silver car",
      img: "./img/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "steel car",
      img: "./img/steel-car.jpg",
      price: 4000,
    },
  ];
  handleItem = (newItem) => {
    this.setState({
      product: newItem,
    });
  };
  render() {
    return (
      <div>
        {/* <Modal product={this.state.product} />
        <ProductList
          listProducts={this.listProducts}
          handleItem={this.handleItem}
        /> */}
        <Cart />
      </div>
    );
  }
}
