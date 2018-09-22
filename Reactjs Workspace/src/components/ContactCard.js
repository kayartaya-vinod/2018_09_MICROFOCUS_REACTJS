import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { deleteContact, setEditingContact } from '../actions/contactActions';

class ContactCard extends PureComponent {
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
        let name = (c.gender === 'Male' ? 'Mr.' : 'Ms.') + c.first_name + ' ' + c.last_name;

        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-sm-4">
                        <img src={c.picture}
                            style={{ borderRadius: '50%', maxWidth: '128px' }}
                            className="img img-responsive" />
                    </div>
                    <div className="col-sm-8">
                        <h3 style={{ cursor: 'pointer' }}
                            onClick={() => {
                                this.props.setEditingContact(c);
                            }}>{name}</h3>
                        <p>{c.email}</p>
                        <p>{c.phone}
                            <button className="close"
                                onClick={() => this.confirmAndDelete(c.id)}>X</button>

                        </p>
                    </div>
                </div>
            </li >
        );
    }
}

export default connect(null, { deleteContact, setEditingContact })(ContactCard);
