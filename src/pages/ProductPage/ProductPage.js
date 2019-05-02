import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-bootstrap";
import { getProductData } from "../../actions/productPageActions";
import { SET_QUANTITY } from "../../constants/constants";
import { addProductToCart } from "../../actions/cartModalActions";
class ProductPage extends Component {
  componentDidMount() {
    this.props.getProductData(this.props.match.params.productId);
  }

  plusQuantityValue = () => {
    this.quantityInput.stepUp();
    this.props.setQuantity(this.quantityInput.value);
  };

  minusQuantityValue = () => {
    this.quantityInput.stepDown();
    this.props.setQuantity(this.quantityInput.value);
  };

  handleChangeQuantityInput = e => {
    e.target.value !== "" ? this.props.setQuantity(e.target.value) : this.props.setQuantity(1);
  };

  buyProduct = e => {
    const { cart, addProductToCart, productData, quantityValue, totalOrderPrice } = this.props;
    e.preventDefault();
    addProductToCart(cart, productData, totalOrderPrice, quantityValue);
  };

  render() {
    const {
      name,
      price,
      weight,
      mainPhoto,
      otherPhotos,
      type,
      region,
      height,
      processing,
      assessment,
      harvestYear,
      article,
    } = this.props.productData;
    return (
      <div className="page">
        <h1 className="page-section-text">SHOP</h1>
        <div className="wrapData">
          <div className="wrapPhotoCarousel">
            <Carousel fade={true} interval={null} style={{ zIndex: 0 }}>
              <Carousel.Item>
                <img className="d-block w-100" src={mainPhoto} alt="1 slide" />
              </Carousel.Item>
              {otherPhotos.map((photo, id) => {
                return (
                  <Carousel.Item key={id}>
                    <img className="d-block w-100" src={photo} alt={`${id + 2} slide`} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div className="wrapInfo">
            <h2 className="nameProduct">{name}</h2>
            <div className="priceProduct">{`₴${price}`}</div>
            <article className="articleProduct" dangerouslySetInnerHTML={{ __html: article }} />
            <div className="parameterProduct">Вага продукту: {weight} г.</div>
            <div className="parameterProduct">Різновид: {type}</div>
            <div className="parameterProduct">Регіон: {region}</div>
            <div className="parameterProduct">Висота: {height} м.</div>
            <div className="parameterProduct">Обробка: {processing}</div>
            <div className="parameterProduct">Оцінка: {assessment}</div>
            <div className="parameterProduct">Рік врожаю: {harvestYear} </div>
            <form onSubmit={this.buyProduct}>
              <div className="quantity">
                <h4>Кількість:</h4>
                <div className="product_quantity_button" onClick={this.minusQuantityValue}>
                  -
                </div>
                <input
                  type="number"
                  step="1"
                  min="1"
                  ref={node => {
                    this.quantityInput = node;
                  }}
                  defaultValue={this.props.quantityValue}
                  onChange={this.handleChangeQuantityInput}
                  name="quantity"
                  className="qty"
                />
                <div className="product_quantity_button" onClick={this.plusQuantityValue}>
                  +
                </div>
              </div>
              <button type="submit" className="buyButton">
                Додати в корзину
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    productData: store.productPage.productData,
    quantityValue: store.productPage.quantityValue,
    cart: store.cartModal.cart,
    totalOrderPrice: store.cartModal.totalOrderPrice,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductData: id => dispatch(getProductData(id)),
    setQuantity: quantity => dispatch({ type: SET_QUANTITY, payload: quantity }),
    addProductToCart: (oldCart, product, oldTotalOrderPrice, quantity) =>
      dispatch(addProductToCart(oldCart, product, oldTotalOrderPrice, quantity)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductPage);
