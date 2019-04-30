import React, { Component } from "react";
import API from "../../services/apiAxios";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    sendResult: "",
  };

  handeChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value, sendResult: "" });
  };

  sendMessage = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    this.setState({ name: "", email: "", message: "" });
    API.post("/message", { name, email, message })
      .then(res => {
        switch (res.status) {
          case 200: {
            this.setState({ sendResult: "Повідомлення успішно відправлено." });
            break;
          }
          default: {
            this.setState({ sendResult: "Помилка серверу, спробуйте будь ласка пізніше." });
            break;
          }
        }
      })
      .catch(err => {
        this.setState({ sendResult: err });
      });
  };

  render() {
    const { name, email, message, sendResult } = this.state;
    return (
      <div className="page">
        <h1 className="page-section-text">CONTACT</h1>
        <div className="wrapContactForm">
          <form onSubmit={this.sendMessage} id="contactForm">
            <label htmlFor="name">Ваше ім'я:</label>
            <input type="text" name="name" id="name" value={name} required onChange={this.handeChangeInput} />
            <label htmlFor="email">Ваш e-mail:</label>
            <input type="email" name="email" id="email" value={email} required onChange={this.handeChangeInput} />
            <label htmlFor="message">Ваше повідомлення:</label>
            <textarea id="message" name="message" rows="5" value={message} required onChange={this.handeChangeInput} />
            <button type="submit" id="sendMessage">
              Відправити
            </button>
            <div className="sendResult">{sendResult}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
