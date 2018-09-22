import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    constructor() {
        super(); // must be called in a subclass
        this.state = {
            name: 'Vinod',
            email: 'vinod@vinod.co',
            phone: '9731424784',
            city: 'Bangalore'
        };
        this.tfChangeHandler = this.tfChangeHandler.bind(this);
    }

    // since this one is an event handler, invoked by browser window + react,
    // this will recieve the event object as the first parameter
    tfChangeHandler({ target }) { // target is a property of the event object
        // let key = target.name;
        // let val = target.value;
        // this.setState({ [key]: val });

        this.setState({ [target.name]: target.value });
    }

    render() {
        return (
            <div>
                <h3>{JSON.stringify(this.state)}</h3>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={this.tfChangeHandler} value={this.state.name} />
                </div>
                <div>
                    <label>City: </label>
                    <input type="text" name="city" onChange={this.tfChangeHandler} value={this.state.city} />
                </div>
                <div>
                    <label>Email id: </label>
                    <input type="text" name="email" onChange={this.tfChangeHandler} value={this.state.email} />
                </div>
                <div>
                    <label>Phone number: </label>
                    <input type="text" name="phone" onChange={this.tfChangeHandler} value={this.state.phone} />
                </div>
                <button onClick={() => { 
                    console.log('Saving this data to server...', this.state);
                }}>Save info</button>
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));