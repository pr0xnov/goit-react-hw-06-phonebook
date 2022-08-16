import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/Contacts/slice';
import ContactItem from 'components/ContactItem/ContactItem';
import { BlockContact, List, Text } from './ContactList.styled';

const ContactList = () => {
  const filterCont = (contacts, value) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  };
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilter);
  const contact = filterCont(contacts, value);

  return (
    <BlockContact>
      <List>
        {contact.length === 0 ? (
          <Text>Contacts not found...</Text>
        ) : (
          contact.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              id={id}
            ></ContactItem>
          ))
        )}
      </List>
    </BlockContact>
  );
};

export default ContactList;
