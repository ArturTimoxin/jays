import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import API from "../../services/apiAxios";
import { getLocations } from "../../actions/locationsActions";
import { TOGGLE_SHOW_CART_ICON, CLEAR_CART } from "../../constants/constants";
import MaskedInput from "react-text-mask";
import { maskPhone } from "../../constants/InputMasks";
import SuccessOrderModal from "./SuccessOrderModal";

class OrderPage extends Component {
  state = {
    name: "",
    phone: "",
    point: "",
    date: "",
    defaultDateInput: "",
    time: "",
    resultSendErr: "",
    showSuccessModal: false,
    successModalMessage: "",
  };

  componentDidMount() {
    const { points, getLocations, toggleShowCartIcon } = this.props;
    if (!points.length) {
      getLocations();
    }
    toggleShowCartIcon();
    // set day for dateInput
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    let today = year + "-" + month + "-" + day;
    this.setState({ defaultDateInput: today, date: today });
  }

  componentWillUnmount() {
    this.props.toggleShowCartIcon();
  }

  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendOrder = e => {
    e.preventDefault();
    const { name, phone, date, time, point } = this.state;
    const { cart, totalOrderPrice, points, clearCart } = this.props;
    let tmpPoint = point;
    if (tmpPoint === "") {
      tmpPoint = points[0].name;
    }
    let cartForOrder = cart.map(elem => {
      return {
        nameProduct: elem.name,
        priceProduct: elem.price,
        quantityProduct: elem.quantity,
      };
    });
    const orderData = { name, phone, date, time, point: tmpPoint, cartForOrder, totalOrderPrice };
    API.post("/order", orderData)
      .then(res => {
        switch (res.status) {
          case 200: {
            clearCart();
            this.setState({
              showSuccessModal: true,
              successModalMessage: "Ваше замовлення було прийнято. Чекаємо на вас :)",
              name: "",
              phone: "",
              point: "",
              date: "",
              time: "",
              resultSendErr: "",
            });
            break;
          }
          default: {
            this.setState({ resultSendErr: "Помилка серверу, спробуйте будь ласка пізніше." });
            break;
          }
        }
      })
      .catch(err => {
        this.setState({ resultSendErr: "Помилка серверу, спробуйте будь ласка пізніше." });
      });
  };

  render() {
    const { points, cart, totalOrderPrice } = this.props;
    const {
      resultSendErr,
      showSuccessModal,
      successModalMessage,
      name,
      phone,
      point,
      time,
      defaultDateInput,
    } = this.state;
    return (
      <div className="page">
        <h1 className="order-title">Оформлення замовлення</h1>
        <SuccessOrderModal showSuccessModal={showSuccessModal} successModalMessage={successModalMessage} />
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
        <form onSubmit={this.sendOrder} id="orderForm">
          <label htmlFor="nameInput">Ім'я:</label>
          <input type="text" name="name" value={name} id="nameInput" required onChange={this.handleChangeInput} />
          <label htmlFor="phoneInput">Телефон:</label>
          <MaskedInput
            type="text"
            required
            mask={maskPhone}
            guide={false}
            showMask={true}
            value={phone}
            name="phone"
            id="phoneInput"
            onChange={this.handleChangeInput}
          />
          <label htmlFor="pointInput">В якій кав'ярні ви б хотіли забрати замовлення?</label>
          <select name="point" id="pointInput" value={point} required onChange={this.handleChangeInput}>
            {points.map(elem => (
              <option value={elem.pointName} key={elem._id + elem.pointName}>
                {elem.pointName}
              </option>
            ))}
          </select>
          <label htmlFor="dateInput">У який день?</label>
          <input
            type="date"
            id="dateInput"
            name="date"
            onChange={this.handleChangeInput}
            defaultValue={defaultDateInput}
            min={defaultDateInput}
            required
          />
          <label htmlFor="timeInput">Коли?</label>
          <input
            type="time"
            name="time"
            min="10:00"
            max="19:00"
            id="timeInput"
            value={time}
            required
            onChange={this.handleChangeInput}
          />
          <div id="timeMes">* Ми видаємо замовлення з 10:00 до 19:00</div>
          <button type="submit" id="orderSubmitBtn">
            Відправити замовлення
          </button>
          <div className="sendResult">{resultSendErr}</div>
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
    toggleShowCartIcon: () => dispatch({ type: TOGGLE_SHOW_CART_ICON }),
    clearCart: () => dispatch({ type: CLEAR_CART }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderPage);
