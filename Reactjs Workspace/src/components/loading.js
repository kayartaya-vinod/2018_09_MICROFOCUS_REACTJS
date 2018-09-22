import React, { Component } from 'react';

// custom helper function 'isEmpty' to check if an object or an array is empty!
function isEmpty(data) {
    console.log('data is', data);
    if (!data) return true;
    if (data instanceof Array && data.length === 0) return true;
    if (data instanceof Object && Object.keys(data).length === 0) return true;
    return false;
}

// This is a function that takes a Component as arg
// and returns either the same or different Component

// method #1
function loadingHoc1(OldCmp) {
    return class NewCmp extends Component {
        render() {
            // assumption is that 'contacts' is a prop in NewComp (coming from ex10.js)
            return (
                isEmpty(this.props.contacts) ?
                    <p>Loading...</p> :
                    <OldCmp {...this.props} />
            );
        }
    }
}

// method #2
function loadingHoc2(OldCmp) {
    return (props) => {
        // assumption is that 'contacts' is a prop in NewComp (coming from ex10.js)
        return (
            isEmpty(props.contacts) ?
                <p>Loading...</p> :
                <OldCmp {...props} />
        );
    }
}

// export default loading('contacts')(ContactList);
// method #3 -> carrier function
function loadingHoc3(prop) {
    return function (OldCmp) { // this is the actual HOC converting OldCmp to NewCmp
        return class NewCmp extends Component {
            render() {
                return (
                    isEmpty(this.props[prop]) ?
                        <p>Loading...</p> :
                        <OldCmp {...this.props} />
                );
            }
        }
    }
}

const loadingHoc4 = (prop) => (OldCmp) => (props) => (
    isEmpty(props[prop]) ?
        <p>Loading...</p> :
        <OldCmp {...props} />
);
export default loadingHoc4;