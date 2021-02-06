import * as types from '../Actions/ActionTypes'

const initialState = {

}

const postReducer = (state=initialState,action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts:action.payload
            }
        
        default:
            return state;
    }
}

export default postReducer;