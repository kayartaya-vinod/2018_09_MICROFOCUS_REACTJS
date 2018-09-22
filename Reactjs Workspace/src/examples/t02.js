import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import '../bootstrap/css/bootstrap.min.css';

class ContactCard extends PureComponent {
    render() {
        console.log('ContactCard.render() called', Math.random());
        let c = this.props.contact;
        return (
            <li key={c.id} className="list-group-item">
                <h3>{c.gender === 'Male' ? 'Mr.' : 'Ms.'} {c.first_name} {c.last_name}</h3>
                <p>{c.email}</p>
                <p>{c.phone}
                    <button className="text-danger close"
                        onClick={() => {
                            this.props.deleteContact(c.id);
                        }}
                    >&times;</button>
                </p>
            </li>
        );
    }
}

class App extends Component {
    state = { contacts: [] }

    componentDidMount() {
        axios.get('http://localhost:4000/contacts/')
            .then(({ data }) => this.setState({ contacts: data }))
        // .then(resp => console.log(resp.data));
        // .then(({ data }) => console.log(data));

    }

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

    render() {

        console.log('contacts is an array of size', this.state.contacts.length);
        let list = this.state.contacts.map(c => (
            <ContactCard key={c.id} contact={c} deleteContact={this.deleteContact} />
        ));

        return (
            <div className="container">

                <h1 className="alert alert-info text-center">My Contacts</h1>

                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <ul className="list-group">
                            {list}
                        </ul>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));