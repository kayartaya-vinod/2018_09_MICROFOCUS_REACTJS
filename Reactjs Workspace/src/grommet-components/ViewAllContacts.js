import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import { connect } from 'react-redux';
import axios from 'axios';
import { FETCH_CONTACTS } from '../actions/types';
import List from 'grommet/components/List';
import ContactCard from './ContactCard'; 

class ViewAllContacts extends Component {

    componentDidMount() {
        this.props.getContacts(); // not from '../actions/contactActions.js'
    }

    render() {
        console.log('ViewAllContacts.props', this.props);
        const contacts = this.props.contacts;
        let list = null;
        if (contacts && contacts instanceof Array) {
            list = contacts.map(c => <ContactCard history={this.props.history} key={c.id} contact={c} />);
        }

        return (
            <Section>
                <List>
                    {list}
                </List>
            </Section>
        );
    }
}

const stateAsProps = (reducers) => ({
    contacts: reducers.contactsReducer  // exposed as this.props.contacts
})

const actionsAsProps = (dispatch) => ({
    getContacts: () => {           // exposed as this.props.getContacts
        axios.get('http://localhost:4000/contacts/')
            .then(resp => dispatch({ type: FETCH_CONTACTS, contacts: resp.data }));
    }
})


export default connect(stateAsProps, actionsAsProps)(ViewAllContacts);