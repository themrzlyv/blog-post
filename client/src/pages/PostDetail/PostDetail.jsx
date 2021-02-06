import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Editpost from '../../components/EditPost/Editpost'
import Loader from '../../components/Loader/Loader'

const PostDetail = () => {
    const [post, setpost] = useState(null)
    const params = useParams();
    const {id} = params;

    useEffect(() => {
        const getDetail = async() => {
            const res = await axios.get(`/posts/${id}`)
            const { data } = res
            setpost(data)
            
        }
        getDetail()
    },[id])

    const handleDelete = async e => {
        e.preventDefault();
        const res = await fetch(`/posts/${id}` , {method:"DELETE"})
        const result = await res.json();
        console.log(result)
        window.location.href = '/'
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                    <NavLink to='/posts'>Back</NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {
                        post === null ? <Loader/>  :
                        (
                            <div className="card text-center">
                                <div className="card-header">
                                    {post.category}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.description}</p>
                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editpanel">
                                        Edit
                                    </button>

                                    <div className="modal fade" id="editpanel" tabIndex="-1" aria-labelledby="editpanel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <Editpost data={post}/>
                                            </div>
                                        </div>
                                    </div>

                                    <a onClick={handleDelete} className="btn btn-outline-danger">Delete</a>
                                </div>
                                <div className="card-footer text-muted">
                                    {post.createdAt}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default PostDetail