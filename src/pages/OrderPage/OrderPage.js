import React, { Component } from "react";
import { connect } from "react-redux";
import { getLocations } from "../../actions/locationsActions";
import { removeProductFromCart } from "../../actions/cartModalActions";
class OrderPage extends Component {
  componentDidMount() {
    const { points, getLocations } = this.props;
    if (!points.length) {
      getLocations();
    }
  }

  deleteProduct = product => {
    const { removeProductFromCart, cart, totalOrderPrice } = this.props;
    removeProductFromCart(cart, product, totalOrderPrice);
  };

  render() {
    const { points, cart, totalOrderPrice } = this.props;
    return (
      <div className="page">
        <h1 className="page-section-text">Оформлення замовлення</h1>
        <div className="order">
          <div className="wrapOrderInfo">
            {cart.map(item => {
              return (
                <div className="wrapProduct">
                  <span>
                    <img src={item.mainPhoto} alt="productPhoto" className="miniProductPhoto" />
                    <span className="nameProduct">{item.name}</span>
                  </span>
                  <span className="price">{`${item.quantity} x ${item.price} ₴ = ${Number(item.quantity) *
                    Number(item.price)} ₴`}</span>
                </div>
              );
            })}
          </div>
          <div className="totalPrice">{totalOrderPrice ? `Усього: ${totalOrderPrice} ₴` : ``}</div>
        </div>
        <form onSubmit="">
          <label htmlFor="nameInput">Ім'я:</label>
          <input type="text" name="name" id="nameInput" required />
          <label htmlFor="phoneInput">Телефон:</label>
          <input type="phone" name="phone" id="phoneInput" required />
          <label htmlFor="pointInput">В якій кав'ярні ви б хотіли забрати замовлення?</label>
          <select name="point" id="pointInput" required>
            {points.map(elem => (
              <option>{elem.name}</option>
            ))}
          </select>
          <label htmlFor="timeInput">У який час?</label>
          <input type="time" id="timeInput" required />
          <button type="submit">Оформити замовлення</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    cart: store.cartModal.cart,
    totalOrderPrice: store.cartModal.totalOrderPrice,
    points: store.locations.points,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLocations: () => dispatch(getLocations()),
    removeProductFromCart: (cart, product, totalOrderPrice) =>
      dispatch(removeProductFromCart(cart, product, totalOrderPrice)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderPage);
