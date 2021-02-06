import axios from 'axios'
import * as types from './ActionTypes'

export const getAllPosts = (category) => async dispatch => {
    let url = `/posts`;
    if(category){
        url = `/posts?category=${category}`
    }
    const res = await axios.get(url)
    const {data} = res
    dispatch({type: types.GET_POSTS, payload: data})
}



