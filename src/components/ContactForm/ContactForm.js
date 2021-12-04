import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={s.inputWrapper}>
          <input
            type="text"
            className={s.input}
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={s.label} htmlFor={this.nameInputId}>
            Name
          </label>
        </div>
        <div className={s.inputWrapper}>
          <input
            type="tel"
            className={s.input}
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <label className={s.label} htmlFor={this.numberInputId}>
            Number
          </label>
        </div>
        <button className={s.button} type="submit">
          Add contact
          {/* <svg className={s.icon} width="18" height="18" fill="#4F95DA">
            <use href="../../images/symbol-defs.svg#icon-user-plus"></use>
          </svg> */}
        </button>
      </form>
    );
  }
}

export default ContactForm;
