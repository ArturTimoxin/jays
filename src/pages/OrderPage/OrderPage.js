import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getLocations } from "../../actions/locationsActions";
import { removeProductFromCart } from "../../actions/cartModalActions";
import { TOGGLE_SHOW_CART_ICON } from "../../constants/constants";
import MaskedInput from "react-text-mask";
import { maskPhone } from "../../constants/InputMasks";

class OrderPage extends Component {
  componentDidMount() {
    const { points, getLocations, toggleShowCartIcon } = this.props;
    if (!points.length) {
      getLocations();
    }
    toggleShowCartIcon();
  }

  deleteProduct = product => {
    const { removeProductFromCart, cart, totalOrderPrice } = this.props;
    removeProductFromCart(cart, product, totalOrderPrice);
  };

  componentWillUnmount() {
    this.props.toggleShowCartIcon();
  }

  render() {
    const { points, cart, totalOrderPrice } = this.props;
    return (
      <div className="page">
        <h1 className="order-title">Оформлення замовлення</h1>
        <div className="order">
          <div className="wrapOrderInfo">
            {cart.map(item => {
              return (
                <div className="wrapProduct" key={item.name}>
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
          <div className="wrapLaTP">
            <Link to="/shop" className="backToShop">
              Назад в магазин
            </Link>
            <div className="totalPrice">{totalOrderPrice ? `Усього: ${totalOrderPrice} ₴` : ``}</div>
          </div>
        </div>
        <form onSubmit="" id="orderForm">
          <label htmlFor="nameInput">Ім'я:</label>
          <input type="text" name="name" id="nameInput" required />
          <label htmlFor="phoneInput">Телефон:</label>
          <MaskedInput
            type="text"
            required
            mask={maskPhone}
            guide={false}
            showMask={true}
            name="phone"
            id="phoneInput"
          />
          <label htmlFor="pointInput">В якій кав'ярні ви б хотіли забрати замовлення?</label>
          <select name="point" id="pointInput" required>
            {points.map(elem => (
              <option key={elem._id + elem.name}>{elem.name}</option>
            ))}
          </select>
          <label htmlFor="timeInput">У який час?</label>
          <input type="time" min="10:00" max="19:00" id="timeInput" required />
          <div id="timeMes">* Ми видаємо замовлення з 10:00 до 19:00</div>
          <button type="submit" id="orderSubmitBtn">
            Відправити замовлення
          </button>
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
    toggleShowCartIcon: () => dispatch({ type: TOGGLE_SHOW_CART_ICON }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderPage);
