import axios from 'axios';
import { FETCH_CONTACTS, DELETE_CONTACT, ADD_CONTACT, SET_EDITING_CONTACT } from './types';

const baseUrl = 'http://localhost:4000/contacts/';

// export const fetchAllContacts = () => (dispatch) => {
//     axios.get(baseUrl)
//         .then(({ data }) => dispatch({ type: FETCH_CONTACTS, contacts: data }));
// }

export function fetchAllContacts() {
    return function (dispatch) {
        axios.get(baseUrl)
            .then(({ data }) => dispatch({ type: FETCH_CONTACTS, contacts: data }));
    }
}

export const deleteContact = (id) => async (dispatch) => {
    await axios.delete(baseUrl + id);
    dispatch({ type: DELETE_CONTACT, id });
}

// in the UI,
// we call this.props.addContact(c1)
// --> makes thunk call the following addContact(..) function,
// which inturn retuns a (dispay)=>{} function, which intur,
// is called by thunk by supplying the store.dispatch function
export const addContact = (contact) => async (dispatch) => {
    try {
        const { data } = await axios.post(baseUrl, contact);
        dispatch({ type: ADD_CONTACT, contact: data });
    }
    catch (e) {
        console.error('There was an error!', e);
    }
}

export const setEditingContact = (contact) => dispatch => {
    dispatch({ type: SET_EDITING_CONTACT, contact });
}