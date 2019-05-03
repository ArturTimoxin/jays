import React, { Component } from "react";
import "./style/style.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import CartModal from "./components/CartModal/CartModal";
import MainPage from "./pages/MainPage/MainPage";
import Philosophy from "./pages/Philosophy/Philosophy";
import Locations from "./pages/Locations/Locations";
import PointInfo from "./pages/PointInfo/PointInfo";
import Shop from "./pages/Shop/Shop";
import ProductPage from "./pages/ProductPage/ProductPage";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import OrderPage from "./pages/OrderPage/OrderPage";
import OrderProtectedRoute from "./utils/OrderProtectedRoute";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CartModal />
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route exact path="/" component={MainPage} />
              <Route path="/philosophy/" component={Philosophy} />
              <Route exact path="/locations/:locationId" component={PointInfo} />
              <Route exact path="/locations/" component={Locations} />
              <Route path="/shop/:productId" component={ProductPage} />
              <Route path="/shop/" component={Shop} />
              <Route path="/contact/" component={Contact} />
              <OrderProtectedRoute path="/order" component={OrderPage} />
              <Route path="/*" component={NotFound} />
            </Switch>
          )}
        />
      </div>
    );
  }
}

export default App;
