import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class HelloComponent extends Component {
    render() {
        console.log('this.props is', this.props);
        console.log('this.state is', this.state);
        console.log('this.refs is', this.refs);

        let msg = this.props.message || 'Hello React World!';
        let trainer = this.props.trainer || 'Someone';

        return (
            <Fragment>
                <h1>{msg}</h1>
                <hr />
                <p>by {trainer}</p>
            </Fragment>
        );
    }
}

ReactDOM.render(
    <HelloComponent message="Welcome to React training" trainer="Vinod" />,
    document.getElementById('root')
);