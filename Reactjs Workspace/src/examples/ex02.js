import React, { Fragment } from 'react';
import RDOM from 'react-dom';

// stateless component; can't access 'this'
// hence cannot access this.state and this.refs as well
// However, you can still access the props:
let HelloComponent = function (props) {

    console.log('props is', props)

    return (
        <Fragment>
            <h1>{props.message || 'Hello, World'}</h1>
            <hr />
            <p>by {props.trainer || 'Someone'}</p>
        </Fragment>
    );
}

RDOM.render(<HelloComponent message="Welcome 2 React Training" trainer="Kumar" />, document.querySelector('div:first-of-type'));