import React, { Component } from 'react';
import ListItem from 'grommet/components/ListItem';
import Card from 'grommet/components/Card';
import Button from 'grommet/components/Button';
import TrashIcon from 'grommet/components/icons/base/Trash';

import { connect } from 'react-redux';
import axios from 'axios';
import { DELETE_CONTACT } from '../actions/types';

class ContactCard extends Component {
    confirmAndDelete = (id) => {
        window.swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to undo",
            icon: "warning",
            buttons: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.props.deleteContact(id);
                }
            });
    }
    render() {
        const c = this.props.contact;
        const fullname = (c.gender === 'Male' ? 'Mr.' : 'Ms.') + c.first_name + ' ' + c.last_name;
        return (
            <ListItem>
                {/* <Image src={c.picture} size="small"
                    style={{ borderRadius: '50%', marginRight: '50px' }} /> */}
                <Card
                    thumbnail={c.picture}
                    label={c.city}
                    heading={fullname}
                    link={<TrashIcon style={{ cursor: 'pointer' }}
                        onClick={() => this.confirmAndDelete(c.id)} />}
                    description={c.phone + ', ' + c.email} />
                <Button label='View full details'
                    onClick={() => this.viewFullDetails(c)} />

            </ListItem>
        );
    }

    viewFullDetails = (contact) => {
        // this.props.history.push('/contact-details/' + contact.id);
        // changes the window.location.href to '/contact-details

        this.props.history.push({
            pathname: '/contact-details/' + contact.id,
            contact
        });

    }
}

const dispatchAsProps = (dispatch) => ({
    deleteContact: (id) => {
        axios.delete('http://localhost:4000/contacts/' + id)
            .then(() => dispatch({ type: DELETE_CONTACT, id }));
    }
})

export default connect(null, dispatchAsProps)(ContactCard);