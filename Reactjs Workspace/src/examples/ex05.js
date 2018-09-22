import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    state = { names: ['Vinod', 'Shyam', 'John', 'Jane'] }

    constructor() {
        super(); // must be called when this is a child class
        this.addNewName = this.addNewName.bind(this); // binding of this component with a method
    }

    deleteName = (index) => {
        let names = [...this.state.names];
        names.splice(index, 1);
        this.setState({ names }); // this.setState({ 'names': names });
    }

    addName = name => this.setState({ names: [...this.state.names, name] });

    addNewName(name) {
        let newNames = [...this.state.names, name];
        this.setState({ names: newNames });
    }

    render() {
        return (
            <Fragment>
                <NameForm addName={this.addName} {...this.props} />
                <NamesList {...this.state} removeName={this.deleteName} />
            </Fragment>
        );
    }
}

// NameForm component does not have state, but uses refs; hence it has to be 
// a class based component.
class NameForm extends Component {

    addButtonHandler = () => {
        // read textbox value from virtual-dom
        this.props.addName(this.refs.name.value);
        this.refs.name.value = '';

        //read textbox value from real=dom (not the right method)
        // this.props.addName(document.getElementById('name').value);
        // document.getElementById('name').value = '';
    }

    render() {

        return (
            // div>label{Enter a name}+input#name[ref=name]+button{Aad name}
            <div>
                <h1>{this.props.heading}</h1>
                <label htmlFor="x">Enter a name</label>
                <input type="text" id="x" ref="name" />
                <button onClick={
                    ()=>{
                        this.props.addName(this.refs.name.value);
                        this.refs.name.value = '';
                    }
                    // this.addButtonHandler
                }>Aad name</button>
            </div>
        );
    }
}


// stateless component for listing names
const NamesList = ({ names, removeName }) => {
    const namesLi = names.map((name, index) => <li key={index}>{name}
        <button onClick={() => removeName(index)}>&times;</button>
    </li>);
    return (
        <div>
            <h3>Names are: </h3>
            <hr />
            <ul>{namesLi}</ul>
        </div>
    )
};


ReactDOM.render(<App heading="Communicating between components" />, document.getElementById('root'));