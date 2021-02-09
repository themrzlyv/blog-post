import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Account from './Account/Account'
import Home from './Home/Home'
import Login from './Login/Login'
import NotFound from './NotFound/NotFound'
import PostDetail from './PostDetail/PostDetail'
import Posts from './Posts/Posts'



const Mainpages = () => {
    return (
        <Switch>
            <Route path='/account' component={Account}/>
            <Route path='/posts' component={Posts}/>
            <Route path='/login' component={Login}/>
            <Route path='/post/:id' component={PostDetail}/>
            <Route path='/' exact component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Mainpages
