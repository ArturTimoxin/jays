import React, { Component } from "react";
import "./style/style.scss";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Philosophy from "./pages/Philosophy/Philosophy";
import Locations from "./pages/Locations/Locations";
import Shop from "./pages/Shop/Shop";
import Contacts from "./pages/Contacts/Contacts";
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
                  <Route path="/locations/" component={Locations} />
                  <Route path="/shop/" component={Shop} />
                  <Route path="/contacts/" component={Contacts} />
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
