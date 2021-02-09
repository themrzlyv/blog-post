import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import CreateCategory from '../../components/Category/CreateCategory'
import CreatePost from '../../components/CreatePost/CreatePost'
import User from '../../components/User/User'
import styles from './Account.module.scss'

const Account = () => {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user.user)
    console.log(user)
    return (
        <div className={`container ${styles.container}`}>
            <div className="row">
                <div className="col-lg-12">
                    {
                        user && (
                            <h4 className="h4 my-2 fs-5 fw-bold text-capitalize">
                                <i className="fas fa-cog mx-1"></i>
                                {user.email}
                            </h4>
                        )
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <User />
                </div>
                <div className="col-lg-5">
                    <CreatePost />
                </div>
            </div>
        </div>
    )
}

export default Account
