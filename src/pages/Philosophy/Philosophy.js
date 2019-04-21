import React, { Component } from "react";
import API from "../../services/apiAxios";

class Philosophy extends Component {
  state = {
    article: "",
  };

  componentDidMount() {
    API.get("/philosophy")
      .then(res => {
        console.log(res);
        this.setState({ article: res.data.article });
      })
      .catch(err => {
        this.setState({ article: err });
      });
  }

  render() {
    const { article } = this.state;
    return (
      <p className="page">
        <h1 className="page-section-text">PHYLOSOPHY</h1>
        <div className="wrapperArticles" dangerouslySetInnerHTML={{ __html: article }} />
      </p>
    );
  }
}

export default Philosophy;
