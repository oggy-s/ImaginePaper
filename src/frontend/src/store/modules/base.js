import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';



// action types
//const CHANGE_INPUT = 'base/CHANGE_INPUT';


// action creators
//export const changeInput = createAction(CHANGE_INPUT);



// initial state
const initialState = Map({


});

// reducer
export default handleActions({
    // [CHANGE_INPUT]: (state, action) => {
    //     logger.log("====== base/CHANGE_INPUT ======")
    //     logger.log("action : ", action);
        
    //     const newState = state.merge(action.payload);
    //     return newState;
    // },
    
}, initialState)

