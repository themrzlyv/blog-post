import React,{useState,useEffect} from 'react'
import Post from '../../components/Post/Post'
import { useSelector } from "react-redux";
import { getAllPosts } from '../../store/Actions/postActions';
import { useDispatch } from "react-redux";
import Filterbox from '../../components/Filterbox/Filterbox';
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
                <div className="col-md-12  mt-4">
                    <Filterbox />
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
