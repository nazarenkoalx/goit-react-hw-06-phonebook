import { nanoid } from 'nanoid';

export const addContact = contact => {
  return {
    type: 'tasks/addContact',
    payload: { id: nanoid(), name: contact.name, number: contact.number },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'tasks/deleteContact',
    payload: contactId,
  };
};

export const setFilter = filter => {
  return {
    type: 'filter/setFilter',
    payload: filter,
  };
};
