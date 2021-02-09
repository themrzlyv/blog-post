import React,{useState,useEffect} from 'react'
import Post from '../Post/Post'
import { useSelector } from "react-redux";
import { getAllPosts } from '../../store/Actions/postActions';
import { useDispatch } from "react-redux";
import Loader from '../../components/Loader/Loader';

const Posts = () => {
    const posts = useSelector(state=> state.posts.posts)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12  mt-4">
                    <h4 className="h4 fw-bolder fs-4">Blog Articles</h4>
                </div>
            </div>
            <div className="row">
                {
                    posts === undefined ? <Loader /> : posts.map(post => (<Post data={post} key={post._id}/>))
                }
            </div>
        </div>
    )
}

export default Posts
