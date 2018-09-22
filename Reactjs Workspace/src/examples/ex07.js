import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import '../bootstrap/css/bootstrap.min.css';

class App extends Component {
    state = { contacts: [] }

    componentDidMount() {
        axios.get('http://localhost:4000/contacts/')
            .then(({ data }) => this.setState({ contacts: data }))
        // .then(resp => console.log(resp.data));
        // .then(({ data }) => console.log(data));

    }

    render() {

        console.log('contacts is an array of size', this.state.contacts.length);
        let list = this.state.contacts.map(c => (
            <li key={c.id} className="list-group-item">
                <h3>{c.gender === 'Male' ? 'Mr.' : 'Ms.'} {c.first_name} {c.last_name}</h3>
                <p>{c.email}</p>
                <p>{c.phone}
                    <button className="text-danger close"
                        onClick={() => {
                            const url = 'http://localhost:4000/contacts/' + c.id;
                            axios.delete(url)
                                .then(() => {
                                    let contacts = [...this.state.contacts];
                                    let index = contacts.findIndex(cnt => cnt.id === c.id);
                                    contacts.splice(index, 1);
                                    this.setState({ contacts });
                                });
                        }}
                    >&times;</button>
                </p>
            </li>
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