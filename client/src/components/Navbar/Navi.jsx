import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { logoutUser } from '../../store/Actions/useAction'
import styles from './Navi.module.scss'

const Navi = () => {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user.user)
    

    const handleLogout = () => {
        dispatch(logoutUser())
        return window.location.href = '/'
    }

    const isUser = () => {
        return(
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-capitalize fw-bolder" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {user.name}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className="dropdown-item fw-bolder" to="/account">Account</NavLink></li>
                  <li><button onClick={handleLogout} className=" dropdown-item fw-bolder" >Logout</button></li>
                </ul>
            </li>
        )
    }

    const notUser = () => {
        return (
            <li className="nav-item">
                <NavLink className="nav-link fw-bolder" to="/login">Login</NavLink>
            </li>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <NavLink to='/' className={`navbar-brand d-flex fw-bold fs-4 align-items-center ${styles.brand}`}>
                    <i className="far fa-hand-spock mx-1"></i>
                    HaloWeb
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-align-right"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                          <NavLink className="nav-link fw-bolder" to="/posts">Blog</NavLink>
                        </li>
                        {user === undefined || user.err ? notUser() : isUser()}
                    </ul>
                </div>
            </div>
      </nav>
    )
}

export default Navi;