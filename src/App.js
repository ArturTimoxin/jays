import React, { Component } from "react";
import "./style/style.scss";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Philosophy from "./pages/Philosophy/Philosophy";
import Locations from "./pages/Locations/Locations";
import PointInfo from "./pages/PointInfo/PointInfo";
import Shop from "./pages/Shop/Shop";
import ProductPage from "./pages/ProductPage/ProductPage";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={MainPage} />
                  <Route path="/philosophy/" component={Philosophy} />
                  <Route path="/locations/:locationId" component={PointInfo} />
                  <Route exact path="/locations/" component={Locations} />
                  <Route path="/shop/:productId" component={ProductPage} />
                  <Route path="/shop/" component={Shop} />
                  <Route path="/contact/" component={Contact} />
                  <Route path="/*" component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
