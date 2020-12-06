import React, { Component } from "react";
import shortid from "shortid";

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import Section from "./Section";

//

class App extends Component {
  state = {
    contacts: [
      { id: shortid.generate(), name: "Rosie Simpson", number: "459-12-56" },
      { id: shortid.generate(), name: "Hermione Kline", number: "443-89-12" },
      { id: shortid.generate(), name: "Eden Clements", number: "645-17-79" },
      { id: shortid.generate(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (this.checkName(name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deletContact = (contactID) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactID
      ),
    }));
  };

  checkName = (name) => {
    return this.state.contacts.some(
      (contact) =>
        contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { contacts, filter } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact} />

          {contacts.length > 1 && (
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          )}
          <h2>Contacts</h2>
          <ContactList
            names={visibleContacts}
            onDeleteContact={this.deletContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
