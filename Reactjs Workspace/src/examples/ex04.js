import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CounterComponent extends Component {
    state = { count: 0 }

    incrementCount = () => {
        // console.log('from inside the incrementCount() function', Date.now());
        // console.log('inside the incrmentCount() function, this is', this);
        this.setState({ 'count': this.state.count + 1 }); // calls render() again
    }

    render() {
        // this.setState({count: 100}); // results in recursion
        // console.log('inside the render() function, this is', this);

        return (
            <div className="some-css-classname">
                <h1>Counter Component Demo</h1>
                <hr />
                <div><label>The value of count is {this.state.count}</label></div>
                
                <button onClick={this.incrementCount}>Click to change the count!</button>
                
                <button onClick={()=>{
                    this.setState({ 'count': this.state.count + 1 });
                }}>Or click  thisto change the count!</button>

                <button onClick={()=>{
                    this.incrementCount();
                }}>Or click  thisto change the count!</button>
            </div>
        );
    }
}

ReactDOM.render(<CounterComponent />, document.getElementById('root'));