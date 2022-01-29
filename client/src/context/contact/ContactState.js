import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../types";
const ContactState = (props) => {
  const inititalState = {
    contacts: [
      {
        id: 1,
        name: "Hill Batsman",
        email: "hill@gmail.com",
        phone: "111-222-3333",
        type: "personal",
      },
      {
        id: 2,
        name: "mirhci zatka",
        email: "mirchi@gmail.com",
        phone: "555-222-8888",
        type: "professional",
      },
      {
        id: 3,
        name: "lasave",
        email: "masave@gmail.com",
        phone: "126-222-0000",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, inititalState);
  //Add Contact
  //Delete Contact
  //Set Current Contact
  //Clear Current Contact
  //Update Contact
  //Filter Contacts
  //Clear Filter
  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
