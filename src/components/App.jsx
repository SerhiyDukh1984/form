import { useState } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = data => {
    setContacts([...contacts, data]);
  };

  return (
    <>
      <Form addContact={addContact} />
      <ContactList contacts={contacts} />
    </>
  );
};
