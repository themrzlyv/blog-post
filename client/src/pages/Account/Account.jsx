import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import User from '../../components/User/User'
import { getAllCategories } from '../../store/Actions/categoryAction'
import { getAllPosts } from '../../store/Actions/postActions'
import styles from './Account.module.scss'

const Account = () => {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user.user)
    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllPosts())
    }, [])
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
                    Last posts
                </div>
            </div>
        </div>
    )
}

export default Account
