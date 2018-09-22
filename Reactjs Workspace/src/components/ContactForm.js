import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/contactActions';
import $ from 'jquery';

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            gender: '',
            dob: '',
            address: '',
            city: 'Bangalore',
            state: 'Karnataka',
            country: 'India',
            picture: 'https://goo.gl/v9rzVK'
        };
        this.tfChangeHandler = this.tfChangeHandler.bind(this);
        this.btnAddHandler = this.btnAddHandler.bind(this);
    }

    tfChangeHandler({ target }) {
        this.setState({ [target.name]: target.value });
    }

    btnAddHandler() {
        this.props.saveContact(this.state);
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            gender: '',
            dob: '',
            address: '',
            city: 'Bangalore',
            state: 'Karnataka',
            country: 'India',
            picture: 'https://goo.gl/v9rzVK'
        });
        // scroll to top
        // import $ from 'jquery';
        $('html,body').animate({ scrollTop: '0' });
    }

    static getDerivedStateFromProps(props, state) {
        return { ...props.contact };
    }

    render() {
        console.log('this.props.contact', this.props.contact);
        return (
            <div>
                <h1 className="alert alert-info">Add new contact</h1>
                <form className="form">
                    <div className="form-group">
                        <label>
                            <input type="radio"
                                name="gender"
                                value='Male'
                                onChange={this.tfChangeHandler} />
                            Mr.</label>

                        <label>
                            <input type="radio"
                                name="gender"
                                value='Female'
                                onChange={this.tfChangeHandler} />
                            Ms.</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="first_name">Firstname</label>
                        <input type="text" className="form-control"
                            name="first_name" id="first_name"
                            value={this.state.first_name}
                            onChange={this.tfChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">Lastname</label>
                        <input type="text" className="form-control"
                            name="last_name" id="last_name"
                            value={this.state.last_name}
                            onChange={this.tfChangeHandler} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" className="form-control"
                            name="phone" id="phone"
                            value={this.state.phone}
                            onChange={this.tfChangeHandler} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email id</label>
                        <input type="email" className="form-control"
                            name="email" id="email"
                            value={this.state.email}
                            onChange={this.tfChangeHandler} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control"
                            name="address" id="address"
                            value={this.state.address}
                            onChange={this.tfChangeHandler} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control"
                            name="city" id="city"
                            value={this.state.city}
                            onChange={this.tfChangeHandler} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input type="text" className="form-control"
                            name="state" id="state"
                            value={this.state.state}
                            onChange={this.tfChangeHandler} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input type="text" className="form-control"
                            name="country" id="country"
                            value={this.state.country}
                            onChange={this.tfChangeHandler} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dob">Date of birth</label>
                        <input type="date" className="form-control"
                            name="dob" id="dob"
                            value={this.state.dob}
                            onChange={this.tfChangeHandler} />
                    </div>
                    <button type="button" className="btn btn-primary btn-block btn-lg"
                        onClick={this.btnAddHandler}>Save details</button>
                </form>
            </div>
        );
    }
}

// while the actual dipatch action is "addContact",
// it is exposed as "this.props.saveContact" in the component

let stateAsProps = (reducers) => ({
    contact: reducers.contactsReducer.editingContact
})
export default connect(stateAsProps, { saveContact: addContact })(ContactForm);