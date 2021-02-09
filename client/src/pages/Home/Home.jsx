import React from 'react'
import {useSelector} from 'react-redux'
import About from '../../components/About/About'
import Posts from '../../components/Posts/Posts'


const Home = () => {
    const user = useSelector(state=>state.user.user)
    return (
        <div className='container'>
            <div className="row border m-0">
                <About />
            </div>
            <div className="row">
                <div className="col-lg-12 mt-2">
                    <Posts />
                </div>
            </div>
        </div>
    )
}

export default Home
