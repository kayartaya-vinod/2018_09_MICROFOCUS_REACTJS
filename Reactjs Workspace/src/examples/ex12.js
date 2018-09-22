import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import rootReducer from '../reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import logger from '../custom-middlewares/logger';
import validator from '../custom-middlewares/validator';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// the middlewares are invoked in sequence after the dispatch happens
// sequence of 'thunk' is immeterial
const store = createStore(rootReducer, applyMiddleware(validator, thunk, logger))

class App extends Component {
    render() {
        
        return (
            // .container>.row>.col-sm-7+.col-sm-5
            <div className="container">
                <h1 className="alert alert-info">Phonebook App v1.0</h1>
                <div className="row">
                    <div className="col-sm-7">
                        <ContactList />
                    </div>
                    <div className="col-sm-5">
                        <ContactForm />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));