import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'
import PostDetail from './PostDetail/PostDetail'
import Posts from './Posts/Posts'



const Mainpages = () => {
    return (
        <Switch>
            <Route path='/posts' component={Posts}/>
            <Route path='/post/:id' component={PostDetail}/>
            <Route path='/' exact component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Mainpages
