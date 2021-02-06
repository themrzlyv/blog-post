import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navi.module.scss'

const Navi = () => {

    const isUser = () => {
        return (
            <>
                <li className="nav-item">
                    <NavLink to='/' className={`nav-link ${styles.navbarlink}`}>
                        <i className="fas fa-user-circle"></i>
                        Account
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/' className={`nav-link ${styles.navbarlink}`}>
                        <i className="fas fa-sign-out-alt"></i>
                        Log Out
                    </NavLink>
                </li>
            </>
        );
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
            <div className={`container ${styles.container}`}>
                    <a className={`navbar-brand ${styles.brand}`}>
                        <i className="far fa-hand-spock mx-1"></i>
                        HaloWeb
                    </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-align-right"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/posts' className={`nav-link ${styles.navbarlink}`}>
                                <i className="fab fa-audible mx-1"></i>
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className={`nav-link ${styles.navbarlink}`}>
                                <i className="fas fa-home mx-1"></i>
                                Home
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink to='/' className={`nav-link ${styles.navbarlink}`}>
                                <i className="fas fa-sign-in-alt mx-1"></i>
                                Login
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navi;
