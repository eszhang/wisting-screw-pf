import * as actionTypes from './actionTypes';

export const Test = id => ({
    type: actionTypes.TEST,
    payload: {
        id
    }
});
