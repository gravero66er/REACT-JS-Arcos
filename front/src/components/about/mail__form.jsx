import React, { Component } from "react";
import axios from "axios";

class MailForm extends Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    sent: false,
  };

  //handle inputs

  hadleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  hadleLastname = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  hadleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  hadlePhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  hadleMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  //end of handle inputs

  formSubmit = (event) => {
    event.preventDefault();

    let data = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    };

    axios
      .post("/api/forma", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          () => {
            this.resetForm();
          }
        );
      })
      .catch(() => {
        console.log("message not sent");
      });
  };

  // reseting initial data

  resetForm = () => {
    this.setState({
      name: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 2000);
  };

  render() {
    return (
      <div className="mail__form">
        <div className="form__title">Задать вопрос</div>
        <form onSubmit={this.formSubmit}>
          <div className="form__item">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              name="name"
              className="form__input"
              placeholder="Ваше имя"
              value={this.state.name}
              onChange={this.hadleName}
            />
          </div>

          <div className="form__item">
            <label htmlFor="lastname">Фамилия</label>
            <input
              type="text"
              name="lastname"
              className="form__input"
              placeholder="Ваша фамилия"
              value={this.state.lastname}
              onChange={this.hadleLastname}
            />
          </div>

          <div className="form__item">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              className="form__input"
              placeholder="Ваш e-mail"
              value={this.state.email}
              onChange={this.hadleEmail}
            />
          </div>

          <div className="form__item">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              name="phone"
              className="form__input"
              placeholder="Ваш телефон"
              value={this.state.phone}
              onChange={this.hadlePhone}
            />
          </div>

          <div className="form__item">
            <label htmlFor="message">Сообщение</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Ваше сообщение"
              value={this.state.message}
              onChange={this.hadleMessage}
            ></textarea>
          </div>

          <div
            className={
              this.state.sent ? "form__message active" : "form__message"
            }
          >
            Сообщение отправлено!
          </div>

          <div className="form__button">
            <button type="submit">Отправить</button>
          </div>
        </form>
      </div>
    );
  }
}

export default MailForm;
