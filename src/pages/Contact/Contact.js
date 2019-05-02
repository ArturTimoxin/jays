import React, { Component } from "react";
import { Form, Field, reduxForm } from "redux-form";
import { sendMessageFromContactForm } from "../../actions/contactActions";

class Contact extends Component {
  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div className="page">
        <h1 className="page-section-text">CONTACT</h1>
        <div className="wrapContactForm">
          <Form onSubmit={handleSubmit(sendMessageFromContactForm)} id="contactForm">
            <label htmlFor="name">Ваше ім'я:</label>
            <Field component="input" type="text" name="name" id="name" required />
            <label htmlFor="email">Ваш e-mail:</label>
            <Field component="input" type="email" name="email" id="email" required />
            <label htmlFor="message">Ваше повідомлення:</label>
            <Field component="textarea" id="message" name="message" rows="5" required />
            <button type="submit" id="sendMessage">
              Відправити
            </button>
            {/* <div className="sendResult">{sendResult}</div> */}
            {<div className="sendResult">{error}</div>}
          </Form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "contact",
})(Contact);
