import axios from 'axios';
import React,{useEffect, useState} from 'react'
import * as types from '../../store/Actions/ActionTypes'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllCategories } from '../../store/Actions/categoryAction';
import { getAllPosts } from '../../store/Actions/postActions';

const Filterbox = () => {
    const [searchbox, setsearchbox] = useState(null)
    const [NotFount, setNotFount] = useState(null)
    const dispatch = useDispatch();
    const category = useSelector(state=>state.category.category)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [])

    const handleChange = (title) => {
        dispatch(getAllPosts(title))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if(searchbox !== null){
            const res = await axios.get(`/posts?title=${searchbox}`)
            const {data} = res
            if(data.length === 0){
                setNotFount('Can not found any post')
            } 
            dispatch({type:types.GET_POSTS, payload: data})
        }
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 p-0">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 d-flex align-items-center">
                            <input
                            onChange={(e) => setsearchbox(e.target.value)}
                            type="text"
                            className="form-control bg-transparent "
                            placeholder="Search..." />
                            <button
                            type='submit'
                            className='btn btn-info'>
                                Search
                            </button>
                            <div className="dropdown">
                                <a className="btn dropdown-toggle" role="button" id="category" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="category">
                                    {
                                        category && category.map(item => (
                                            <li key={item._id} onClick={() => handleChange(item.name)}>
                                                <a className="dropdown-item">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {
                        NotFount === null ? null : (<h4 className='h4'>{NotFount}</h4>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Filterbox


