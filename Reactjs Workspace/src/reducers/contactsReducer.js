import { ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACTS, SET_EDITING_CONTACT } from "../actions/types";

// the only thing to do here is to return a modified state (contacts)
// based on the action.type
export default function (contacts = [], action = {}) {

    switch (action.type) {
        case ADD_CONTACT:
            return [...contacts, action.contact]; // action.contact --> payload
        case DELETE_CONTACT:
            let tmp = [...contacts];
            let index = tmp.findIndex(c => c.id === action.id); // action.id --> payload
            tmp.splice(index, 1);
            return [...tmp];
        case FETCH_CONTACTS:
            return [...action.contacts]; // action.contacts --> payload (fresh copy coming from REST endpoint)
        default:
            return contacts;
    }

}

// another version of the above reducer, where state is not an array, but an object
export const contactsReducer = (state = { contacts: [], editingContact: null }, action = {}) => {
    switch (action.type) {
        case ADD_CONTACT:
            return { ...state, contacts: [...state.contacts, action.contact] };
        case DELETE_CONTACT:
            let tmp = [...state.contacts];
            let index = tmp.findIndex(c => c.id === action.id); // action.id --> payload
            tmp.splice(index, 1);
            return { ...state, contacts: [...tmp] };
        case FETCH_CONTACTS:
            return { ...state, contacts: [...action.contacts] }; // action.contacts --> payload (fresh copy coming from REST endpoint)
        case SET_EDITING_CONTACT:
            return { ...state, editingContact: action.contact };
        default:
            return { ...state };
    }
} 