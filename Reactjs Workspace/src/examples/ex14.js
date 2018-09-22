import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';

const url = 'http://localhost:4000/contacts/';

class App extends Component {
    state = { contacts: [] }
    page = 1

    loadData = () => {
        axios.get(url, {
            params: {
                _page: this.page,
                _limit: 7
            }
        }).then(resp => {
            this.setState({ contacts: [...this.state.contacts, ...resp.data] });
        });
    }

    componentDidMount() {
        let self = this;
        self.loadData();

        $(window).scroll(function () {
            var w = $(window);
            var d = $(document);
            if (w.scrollTop() + w.height() + 20 >= d.height()) {
                self.page++;
                self.loadData();
            }
        });
    }

    render() {
        const list = this.state.contacts.map(c => <li className="list-group-item">
            <div className="row">
                <div className="col-sm-4">
                    <img src={c.picture} className="img img-responsive"
                        style={{ borderRadius: '50%', maxWidth: '128px' }} />
                </div>
                <div className="col-sm-8">
                    <h3>{c.first_name} {c.last_name}</h3>
                    <p>{c.email}</p>
                    <p>{c.phone}</p>
                </div>
            </div>
        </li>);

        return (
            <ul className="list-group">
                {list}
            </ul>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));