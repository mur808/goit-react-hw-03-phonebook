import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  contactName = () => {
    return this.state.contacts.map(contact => contact.name.toLowerCase());
  };
  formSubmitHandler = data => {
    if (this.contactName().includes(data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }));
    }
  };
  searchFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };
  searchInputChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  deleteContact = data => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== data.id),
    }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filterValue={this.state.filter} change={this.searchInputChange} />
        <ContactList contacts={this.searchFilter()} onDelete={this.deleteContact} />
      </div>
    );
  }
}

export default App;
