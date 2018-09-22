import React, { Component } from 'react';
import ContactCard from './ContactCard';
import sort from './sort';
import loading from './loading';

import { connect } from 'react-redux'; // react-redux bindigs
// connect is a carrier function that returns an HOC

import { fetchAllContacts } from '../actions/contactActions';

class ContactList extends Component {

    componentDidMount() {
        // fetchAllContacts(); // does not work; we want thunk to call this function
        this.props.fetchAllContacts(); // triggers thunk to invoke the actual action function
    }

    render() {
        let list = null;

        if (this.props.contacts instanceof Array) {
            list = this.props.contacts.map(c => (
                <ContactCard contact={c} key={c.id} />
            ));
        }

        return (
            <div>
                <p>This app is developed by {this.props.userInfo.name} ({this.props.userInfo.email})</p>
                <ul className="list-group">
                    {list}
                </ul>
            </div>
        );
    }
}

// connect() returns an HOC that binds the state of the store
// and thunk actions with the ContactList, by setting them in the
// "this.props" of ContactList

// The connect() takes two parameters
// 1. function that returns the store's state that this component needs
let stateAsProps = (reducers) => ({
    contacts: reducers.contactsReducer.contacts, // is available as this.props.contacts
    userInfo: reducers.userReducer
})

// 2. an object that maps all the functions that thunk should invoke
let actionsAsProps = { fetchAllContacts };

// export default connect(stateAsProps, actionsAsProps)(ContactList);
export default connect(stateAsProps, actionsAsProps)(sort('contacts', 'id', true)(ContactList));
