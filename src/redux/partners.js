import * as ActionTypes from './ActionTypes';

export const Partners = (state = { isLoading: true, errMess: null, partners: []}, action) => {
    switch (action.type) {
        case ActionTypes.PARTNERS_LOADING:
            return {...state, isLoading: true, errMess: null, partners: []};
        case ActionTypes.ADD_PARTNERS:
            return {...state, isLoading: false, errMess: null, partners: action.payload};
        case ActionTypes.PARTNERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        case ActionTypes.ADD_PARTNER:
            const partner = action.payload;
            return {...state, partners: state.partners.concat(partner)};
        default:
            return state;
      }
};