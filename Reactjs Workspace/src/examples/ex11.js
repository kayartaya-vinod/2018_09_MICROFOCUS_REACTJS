import $ from 'jquery';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// The crux of a redux app is a 'Store', and you can create one using
// the 'createStore' method of 'redux' module

// A store is always based on one or more reducer

// A reducer is a function that receives the current state of the store along
// with an action dispathed by the user. 

let initialState = ['Vinod', 'Shyam', 'Rajesh', 'Ramesh', 'Harish'];

// the reducer function is always invoked by the REDUX
function namesReducer(state = initialState, action = {}) {
    console.log('Got an action', action);
    switch (action.type) {
        case 'ADD_NAME':
            return [...state, action.name]; // action.name is the payload here
        case 'DELETE_NAME':
            let tmp = [...state];
            tmp.splice(action.index, 1);    // action.index is the payload here
            return [...tmp];
        case 'FETCH_NAMES':
            break;
        default:
    }
    return [...state]; // 'state' is supposed to be immutable

}

var store = createStore(namesReducer, composeWithDevTools());

// a redux store has a function called 'dispatch' to dispatch an action
// and a function called 'subscribe' to listen to state changes
// and a function called 'getState' that returns the current state in the store

const displayNames = () => {
    console.log('Subcriber is called');
    let list = $('#namelist'); // gets the <ul id='namelist'>
    list.empty();
    store.getState().forEach((name, index) => {
        let delLink = $('<a>')
            .attr('href', '#')
            .html('x')
            .click(() => store.dispatch({ type: 'DELETE_NAME', index }));

        $('<li>')
            .append(name)
            .append('&nbsp;&nbsp;')
            .append(delLink)
            .appendTo(list)
    });
}

store.subscribe(displayNames);
displayNames(); // initial display

// An action is an object - typically consisting of two properties: 
// 1. type -> ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACTS, ...
// 2. payload -> data corresponding to the action to be taken

$('#btnAdd').click(() => {
    let name = $('#name').val(); // value in the textbox with id 'name'
    if (!name) return;

    store.dispatch({ type: 'ADD_NAME', name });
    console.log('Just dispatched an action..');
    $('#name').val('').focus();
});