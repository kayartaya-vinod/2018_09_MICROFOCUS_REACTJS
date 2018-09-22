import React, { Component } from 'react';

// carrier function returing a higher-order-component
// A higher-order-component is a function that takes old-component and returns new-component
export default () => (OldComp) => (
    class NewComp extends Component {
        componentWillMount() {
            this.startTime = Date.now();
        }
        render() {
            return <OldComp {...this.props} />
        }
        componentDidMount() {
            let totalTime = Date.now() - this.startTime;
            console.log('The component %s took %d millis', OldComp.name, totalTime);
        }
    }
);

// carrier function returning a stateless HOC
// export default () => (OldComp) => (props) => <OldComp {...props} />