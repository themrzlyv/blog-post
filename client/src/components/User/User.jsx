import React from 'react'
import {useDispatch,useSelector} from 'react-redux'

const User = () => {
    const user = useSelector(state=>state.user.user)
    return (
        <>
            {
                user && (
                    <div className="card bg-transparent">
                        <div className="card-body">
                            <h5 className="card-title text-capitalize d-flex my-2 align-items-center">
                                <i className="fas fa-user mx-1"></i>
                                Name: {user.name}
                            </h5>
                            <p className="card-text">
                                <i className="far fa-envelope mx-1"></i>
                                {user.email}
                            </p>
                            <button href="#" className="btn ">Edit Account</button>
                            <button href="#" className="btn ">Category</button>
                            <button href="#" className="btn ">My Posts</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default User
