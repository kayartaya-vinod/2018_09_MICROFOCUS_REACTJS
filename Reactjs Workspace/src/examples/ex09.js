import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import '../bootstrap/css/bootstrap.min.css';

class ContactCard extends PureComponent {

    componentWillUnmount() {
        console.log('ContactCard is unmounted for', this.props.contact.first_name);
    }
    render() {
        let c = this.props.contact;
        console.log('ContactCard.render() called for', c.first_name);
        return (
            <li key={c.id} className="list-group-item">
                <div className="row">
                    <div className="col-sm-4">
                        <img src={c.picture} 
                            style={{'border-radius': '50%'}}
                            className="img img-responsive" />
                    </div>
                    <div className="col-sm-8">
                        <h3>
                            {c.gender === 'Male' ? 'Mr.' : 'Ms.'} {c.first_name} {c.last_name}</h3>
                        <p>{c.email}</p>
                        <p>{c.phone} -
                ({this.props.index + 1} of {this.props.contactsCount})
                    <button className="text-danger close"
                                onClick={() => {
                                    this.props.deleteContact(c.id);
                                }}
                            >&times;</button>
                        </p>
                    </div>
                </div>

            </li>
        );
    }
}

class App extends Component {
    state = { contacts: [] }
    deleteContact = (id) => {
        const url = 'http://localhost:4000/contacts/' + id;
        axios.delete(url)
            .then(() => {
                let contacts = [...this.state.contacts];
                let index = contacts.findIndex(cnt => cnt.id === id);
                contacts.splice(index, 1);
                this.setState({ contacts });
            });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/contacts/')
            .then(({ data }) => this.setState({ contacts: data }))
    }

    render() {
        console.log('App.render() called with an array of size', this.state.contacts.length);
        // convert each 'contact' object into a 'ContactCard' component
        // convert the array 'contacts' into an array of 'ContactCard' components
        let list = this.state.contacts.map((c, index) => (
            <ContactCard key={c.id} contact={c}
                deleteContact={this.deleteContact}
                contactCount={this.state.contacts.length}
                index={index}
            />
        ));

        return (
            <div className="container">

                <h1 className="alert alert-info text-center">My Contacts</h1>

                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <ul className="list-group">
                            {list}
                        </ul>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));