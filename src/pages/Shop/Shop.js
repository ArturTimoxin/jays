import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../../store/configureStore.js";
import { getProducts } from "../../actions/shopActions";
class Shop extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div className="page">
        <h1 className="page-section-text">SHOP</h1>
        <div className="wrapperProducts">
          {products.map(product => (
            <div key={product._id} className="productInfo" onClick={() => history.push(`/shop/${product._id}`)}>
              <div className="productImage" style={{ backgroundImage: "url(" + product.mainPhoto + ")" }} />
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

const mapStateToProps = store => {
  return {
    products: store.shop.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shop);
