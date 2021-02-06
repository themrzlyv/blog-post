import React from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import Filterbox from '../../components/Filterbox/Filterbox'
import Posts from '../Posts/Posts'

const Home = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-8 mt-2">
                    <Posts />
                </div>
                <div className="col-lg-4 mt-2">
                    <CreatePost />
                </div>
            </div>
        </div>
    )
}

export default Home
