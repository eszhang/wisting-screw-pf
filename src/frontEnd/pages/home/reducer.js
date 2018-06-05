import * as actionTypes from './actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.TEST:
            return action.payload.id;
        default:
            return state;
    }
};
