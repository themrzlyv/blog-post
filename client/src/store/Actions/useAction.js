import * as types from './ActionTypes'

export const getUser = () => async dispatch => {
    const res = await fetch(`/user/refresh_token`);
    const data = await res.json()
    const res_user_info = await fetch(`/user/info`, {
        headers: {
            "Authorization": data
        }
    })
    const user_info = await res_user_info.json()
    dispatch({
        type: types.GET_USER,
        payload: user_info
    })
}

export const logoutUser = () => async dispatch => {
    const res = await fetch(`/user/logout`, {method: "DELETE"})
    const data = await res.json()
    dispatch({
        type: types.LOGOUT_USER,
        payload: data
    })
}