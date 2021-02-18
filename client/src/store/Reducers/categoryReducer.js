import * as types from '../Actions/ActionTypes'

const initialState = {}


const categoryReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.GET_CATEGORIES:
            return {
                ...state,
                category:action.payload
            }
    
        default:
            return state;
    }
}

export default categoryReducer;