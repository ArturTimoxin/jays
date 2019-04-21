import React, { Component } from "react";

class ProductPage extends Component {
  render() {
    const { match } = this.props; // match.params.locationId
    return (
      <div className="page">
        <h1 className="page-section-text">Product ID: {match.params.productId}</h1>
      </div>
    );
  }
}

export default ProductPage;
