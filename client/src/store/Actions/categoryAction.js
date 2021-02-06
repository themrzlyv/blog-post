import * as types from './ActionTypes'
import axios from 'axios'

export const getAllCategories = () => async dispatch => {
    const res = await axios.get(`/category`)
    dispatch({
        type: types.GET_CATEGORIES,
        payload: res.data
    })
}