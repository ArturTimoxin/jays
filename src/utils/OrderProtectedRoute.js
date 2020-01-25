import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const OrderProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const { redirectToMainPage } = rest;
      return redirectToMainPage ? (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

const mapStateToProps = state => ({
  redirectToMainPage: state.cartModal.redirectToMainPage,
});

export default connect(mapStateToProps)(OrderProtectedRoute);
