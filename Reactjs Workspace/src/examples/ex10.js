import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ContactList from '../components/ContactList';

const baseUrl = 'http://localhost:4000/contacts/';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [] };
    }

    async componentDidMount() {
        let { data } = await axios.get(baseUrl);
        this.setState({ contacts: data });
    }

    render() {
        return (
            // .container>.row>.col-sm-2*3
            <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <ContactList contacts={this.state.contacts} />
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));