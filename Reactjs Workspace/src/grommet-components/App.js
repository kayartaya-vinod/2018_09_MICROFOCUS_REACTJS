import React, { Component } from 'react';
import GrommetApp from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import Layer from 'grommet/components/Layer';

import { Link, Route } from 'react-router-dom';
import Home from './Home';

// import ViewAllContacts from './ViewAllContacts';
// import AddNewContact from './AddNewContact';
// import ContactDetails from './ContactDetails';

import Lodable from 'react-loadable';

// 'loading' component
const Loading = () => <h1 style={{ textAlign: 'center' }}>Loading...</h1>;
const ViewAllContacts = Lodable({
    loader: () => import('./ViewAllContacts'),
    loading: Loading
});
const AddNewContact = Lodable({
    loader: () => import('./AddNewContact'),
    loading: Loading
});
const ContactDetails = Lodable({
    loader: () => import('./ContactDetails'),
    loading: Loading
});

// const { registerObserver} = require('react-perf-devtool');
// registerObserver();

class App extends Component {
    state = {
        showHideForm: false
    };

    render() {

        let contactForm = null;
        if (this.state.showHideForm) {
            contactForm = <Layer closer={true} 
                align="right"
                onClose={() => { 
                this.setState({showHideForm: false})
            }}><AddNewContact /></Layer>
        }

        return (
            <GrommetApp>
                <Article>
                    <Header>
                        <h1>Phonebook App V2.0</h1>
                    </Header>
                    <Header>
                        <Link to="/">
                            <Button primary={true} label="Home" onClick={() => { }} />
                        </Link>
                        <Link to="/view-all-contacts">
                            <Button primary={true} label="View all contacts" onClick={() => { }} />
                        </Link>
                        {/* <Link to="/add-new-contact"> */}
                            <Button primary={true} label="Add new contact" onClick={() => {
                                this.setState({ showHideForm: true });
                            }} />
                        {/* </Link> */}
                    </Header>
                    <Section>
                        <Route path="/" exact={true} render={() => <Home title="Welcome to Grommet Phonebook" />} />
                        <Route path="/view-all-contacts" component={ViewAllContacts} />
                        {/* <Route path="/add-new-contact" component={AddNewContact} /> */}
                        <Route path="/contact-details/:id?" component={ContactDetails} />

                        {
                            contactForm
                        }

                    </Section>
                </Article>
            </GrommetApp>
        );
    }
}

export default App;