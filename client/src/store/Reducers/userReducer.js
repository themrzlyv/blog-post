import * as types from '../Actions/ActionTypes'

const initialState = {
    
}

const userReducer = (state=initialState,action) => {
    switch (action.type) {
        case types.GET_USER:
            const user = action.payload
            return {
                ...state,
                user
            }
        case types.LOGOUT_USER:
            return {
                ...state,
                user:action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer