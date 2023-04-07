import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import nextId from "react-id-generator";

const PhonebookSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: [],
        filter: '',
    },
    reducers: {
        addContacts: {
            reducer(state, action) {
                let contactIsNew = true;
                state.contacts.forEach((contact) => {
                    if (contact.name.toLowerCase() === action.payload.name.toLowerCase()) {
                        contactIsNew = false;
                    }
                })
                if (contactIsNew === false) {
                    return alert(`${action.payload.name} is already in contacts`)
                } else {
                    state.contacts.push(action.payload);
                }
            },
            prepare(contact) {
                return {
                    payload: {
                        name: contact.name,
                        number: contact.number,
                        id: nextId(),
                    }
                }
            }
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        setFilter(state, action) {  
            state.filter = action.payload;
        }
    }

})

const persistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['filter'],
};

export const PhonebookReducer = persistReducer(
  persistConfig,
  PhonebookSlice.reducer
)

export const { addContacts, deleteContact, setFilter } = PhonebookSlice.actions;
