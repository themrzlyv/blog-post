import React from 'react'
import styles from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}></div>
            <span className={styles.span}>Loading...</span>
        </div>
    )
}

export default Loader
