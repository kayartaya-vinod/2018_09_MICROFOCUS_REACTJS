import { ADD_CONTACT } from "../actions/types";

export default store => next => action => {
    console.log('From inside of validator middleware...', action);
    if (action.type === ADD_CONTACT) {
        debugger;
        let { contact } = action; // let contact = action.contact;
        if (contact && (
            !contact.first_name ||
            !contact.phone ||
            !contact.email)) {
            console.error('contact does not have firstname or email or phone');
        }
        else {
            next(action);
        }
    }
    else {
        next(action);
    }

}