import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

const contactsInitialState = [
  { id: 'sdjnjsdnisdn', name: 'Learn HTML and CSS', number: '002302303' },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'tasks/addContact':
      return [...state, action.payload];
    case 'tasks/deleteContact':
      return {
        ...state,
        contacts: state.filter(contact => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

const filterInitialState = '';

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
