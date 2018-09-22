import React from 'react';
import ReactDOM from 'react-dom';


let HelloComponent = ({ trainer, message }) => (
    <div>
        <h2>{message}</h2>
        <hr />
        <p>by {trainer}</p>
    </div>
);

ReactDOM.render(<HelloComponent
    message="Welcome 2 React training"
    trainer="Vinod Kumar"
    audience="MicroFocus" />, document.getElementById('root'));