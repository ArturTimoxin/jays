import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const OrderProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const { cart } = rest;
      return cart.length > 0 ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      );
    }}
  />
);

const mapStateToProps = state => ({
  cart: state.cartModal.cart,
});

export default connect(mapStateToProps)(OrderProtectedRoute);
