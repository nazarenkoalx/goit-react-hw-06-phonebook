// import { combineReducers } from 'redux';
// import { addContact, deleteContact, setFilter } from './actions';
// import { createReducer } from '@reduxjs/toolkit';

// const contactsInitialState = [
//   { id: 'sdjnjsdnisdn', name: 'Learn HTML and CSS', number: '002302303' },
// ];

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     const index = state.findIndex(contact => contact.id === action.payload);
//     state.slpice(index, 1);
//   },
// });

// const filterInitialState = '';

// export const filterReducer = createReducer(filterInitialState, {
//   [setFilter]: (state, action) => {
//     state.filter = action.payload;
//   },
// });

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
