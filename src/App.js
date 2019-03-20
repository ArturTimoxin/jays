import React, { Component } from "react";
import MainPage from "../src/pages/MainPage/MainPage";
import NotFound from "../src/pages/NotFound/NotFound";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style/style.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MainPage />
          <Route exact path="/nf" component={NotFound} />
        </Router>
      </div>
    );
  }
}

export default App;
