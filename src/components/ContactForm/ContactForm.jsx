import React from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  submitForm = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(5),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.submit(newContact);
    this.reset();
  };
  render() {
    return (
      <form onSubmit={this.submitForm} className={styles.form}>
        <label className={styles.form_label}>
          Name
          <input
            className={styles.form_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.inputChange}
          />
        </label>
        <label className={styles.form_label}>
          Number
          <input
            className={styles.form_input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.inputChange}
          />
        </label>
        <button type="submit" className={styles.form_btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
