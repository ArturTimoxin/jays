import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { TOGGLE_SHOW_CART_MODAL } from "../../constants/constants";
import { removeProductFromCart } from "../../actions/cartModalActions";
class CartModal extends Component {
  deleteProduct = product => {
    const { removeProductFromCart, cart, totalOrderPrice } = this.props;
    removeProductFromCart(cart, product, totalOrderPrice);
  };

  render() {
    const { showCartModal, toggleShowModal, cart, totalOrderPrice } = this.props;
    return (
      <div className={`cartModal ${showCartModal ? "show" : ""}`}>
        <div className="wrapCartModal">
          <div className="wrapHeadCartModal">
            <h4 className="nameModal">Корзина</h4>
            <span id="closeCartModal" onClick={toggleShowModal}>
              +
            </span>
          </div>
          <div className="wrapOrderInfo">
            {cart.map(item => {
              return (
                <div className="wrapProduct" key={item.name}>
                  <span>
                    <div className="deleteProduct" onClick={() => this.deleteProduct(item)}>
                      +
                    </div>
                    <span className="nameProduct">{item.name}</span>
                  </span>
                  <span className="price">{`${item.quantity} x ${item.price} ₴ = ${Number(item.quantity) *
                    Number(item.price)} ₴`}</span>
                </div>
              );
            })}
          </div>
          <div className="totalPrice">{totalOrderPrice ? `Усього: ${totalOrderPrice} ₴` : ``}</div>
          <div className="wrapDialog">
            <span className="continueShopping" onClick={toggleShowModal}>
              Продовжити покупку
            </span>
            <Link to="/order" className={`makeOrder ${!totalOrderPrice ? "disable" : ""}`} onClick={toggleShowModal}>
              Купити
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    showCartModal: store.cartModal.showCartModal,
    cart: store.cartModal.cart,
    totalOrderPrice: store.cartModal.totalOrderPrice,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleShowModal: () => dispatch({ type: TOGGLE_SHOW_CART_MODAL }),
    removeProductFromCart: (cart, product, totalOrderPrice) =>
      dispatch(removeProductFromCart(cart, product, totalOrderPrice)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartModal);
