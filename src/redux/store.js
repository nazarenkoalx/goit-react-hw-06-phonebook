import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filterReducer } from './reducer';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
