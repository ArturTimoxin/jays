import React, { Component } from "react";
import exampleProduct from "../../assets/img/coffee-package-mini.jpg";
import { history } from "../../store/configureStore.js";
class Shop extends Component {
  state = {
    products: [
      { id: 0, img: exampleProduct, name: "Coffee arabica", price: "250" },
      { id: 1, img: exampleProduct, name: "Coffee arabica", price: "250" },
      { id: 2, img: exampleProduct, name: "Coffee arabica", price: "250" },
      { id: 3, img: exampleProduct, name: "Coffee arabica", price: "250" },
      { id: 4, img: exampleProduct, name: "Coffee arabica", price: "250" },
      { id: 5, img: exampleProduct, name: "Coffee arabica", price: "250" },
      { id: 6, img: exampleProduct, name: "Coffee arabica", price: "250" },
      { id: 7, img: exampleProduct, name: "Coffee arabica", price: "250" },
      { id: 8, img: exampleProduct, name: "Coffee arabica", price: "250" },
      { id: 9, img: exampleProduct, name: "Coffee arabica", price: "250" },
      { id: 10, img: exampleProduct, name: "Coffee arabica", price: "250" },
    ],
  };

  render() {
    const { products } = this.state;
    return (
      <div className="page">
        <h1 className="page-section-text">SHOP</h1>
        <div className="wrapperProducts">
          {products.map(product => (
            <div
              key={product.id + product.name}
              className="productInfo"
              onClick={() => history.push(`/shop/${product.id}`)}
            >
              <div className="productImage" style={{ backgroundImage: "url(" + product.img + ")" }} />
              <div className="productName">{product.name}</div>
              <div className="price">{`₴${product.price}`}</div>
            </div>
          ))}
          <div className="emptyProductInfo" />
          <div className="emptyProductInfo" />
          <div className="emptyProductInfo" />
        </div>
      </div>
    );
  }
}

export default Shop;
