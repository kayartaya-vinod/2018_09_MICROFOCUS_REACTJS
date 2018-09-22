import React from 'react';

export default (items, field, reverse = false) => (OldComp) => (props) => {
    // check if props has 'items', and if yes, sort it based on the field 'field'
    let tmp = props[items];

    if (tmp instanceof Array && tmp.length > 0) {
        tmp.sort((itm1, itm2) => {
            if (itm1[field] < itm2[field]) return -1;
            if (itm1[field] > itm2[field]) return 1;
            return 0;
        });
        if(reverse) {
            tmp.reverse();
        }
    }
    return <OldComp {...props} />
};