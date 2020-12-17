import React, { useReducer, useContext, createContext } from 'react';
import contactReducer from './contactReducer';

const ContactContext = createContext();

// Create a custom hook to use the contact context

export const useContacts = () => {
  const { state, dispatch } = useContext(ContactContext);
  return [state, dispatch];
};

const initialState = {
  contacts: null,
  current: null,
  filtered: null,
  error: null
};

const ContactState = (props) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
