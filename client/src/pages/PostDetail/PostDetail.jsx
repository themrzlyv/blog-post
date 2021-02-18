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
                    <NavLink className='btn' to='/posts'>
                        <i className="fas fa-arrow-left mx-1"></i>
                        Back
                    </NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {
                        post === null ? <Loader/>  :
                        (
                            <div className="card text-left">
                                <div className="card-header d-flex align-items-center">
                                    <span className='mx-2 fst-italic'>Category: </span>
                                    <h4 className='h4 fw-bold fs-5 m-0'> 
                                        {post.category}
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title border-bottom w-25 p-1 h5 m-0 fw-bold">{post.title}</h5>
                                    <p className="card-text my-3 ">
                                        <i className="fab fa-readme mx-1"></i>
                                        {post.description}
                                    </p>
                                    <button type="button" className="btn fst-italic" data-bs-toggle="modal" data-bs-target="#editpanel">
                                        <i className="fas fa-pencil-alt mx-1"></i>
                                        Edit
                                    </button>

                                    <div className="modal fade" id="editpanel" tabIndex="-1" aria-labelledby="editpanel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <Editpost data={post}/>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#deleteItem">
                                        <i className="fas fa-recycle mx-1"></i>
                                        Remove
                                    </button>

                                    <div class="modal fade" id="deleteItem" tabindex="-1" aria-labelledby="deleteItemLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div style={{border:'none'}} className="modal-header ">
                                                    <h5 className="modal-title" id="deleteItemLabel">
                                                        Remove this post?
                                                        <i className="fas fa-trash mx-1"></i>
                                                    </h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                
                                                <div style={{border:'none'}} className="modal-footer">
                                                    <button type="button" className="btn" data-bs-dismiss="modal">Back</button>
                                                    <button 
                                                    onClick={handleDelete}
                                                    type="button" 
                                                    className="btn">
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-footer text-muted ">
                                    <h6 className='h6 m-0 d-flex align-items-center'>
                                        <i className="far fa-calendar-alt mx-1"></i>
                                        {post.createdAt}
                                    </h6>
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