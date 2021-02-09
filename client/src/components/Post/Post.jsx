import React,{useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Post.module.scss'

const Post = ({data}) => {
    return (
        <div style={{width:'31%'}} className={`col-lg-4 p-0 mx-auto my-1 ${styles.container}`}>
            <div className={`${styles.card} card`} >
                <div className="card-body">
                    <p className="card-text">Title: {data.title}</p>
                    <p className="card-text">Category: {data.category}</p>
                    <p className="card-text">Description: {data.description}</p>
                    <p className="card-text"><i className="far fa-calendar-alt"></i> {data.createdAt}</p>
                    <NavLink to={`/post/${data._id}`} className='btn d-flex align-items-center'>
                        Read More
                        <i className="fas fa-arrow-alt-circle-right mx-1"></i>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Post
