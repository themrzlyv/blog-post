import React,{useEffect} from 'react'
import {NavLink} from 'react-router-dom'

const Post = ({data}) => {
    return (
        <div className='col-lg-6 mx-auto my-1'>
            <div className="card" >
                {/* <img src="..." className="card-img-top" alt="..."/> */}
                <div className="card-body">
                    <p className="card-text">{data.title}</p>
                    <p className="card-text">{data.category}</p>
                    <p className="card-text">{data.description}</p>
                    <p className="card-text">{data.createdAt}</p>
                    <NavLink to={`/post/${data._id}`} className='btn btn-outline-info'>Read More</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Post
