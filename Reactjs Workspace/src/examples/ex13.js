import React from 'react'; // required if JSX is used in this module
import ReactDOM from 'react-dom'
import 'grommet/grommet-hpe.min.css';

import App from '../grommet-components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HashRouter as Router } from 'react-router-dom';

// disable during production
const { registerObserver } = require('react-perf-devtool')
window.observer = registerObserver()

// remove "composeWithDevTools()" during production
const store = createStore(rootReducer, composeWithDevTools());


// assign the observer to the global scope, as the GC will delete it otherwise

ReactDOM.render(<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));