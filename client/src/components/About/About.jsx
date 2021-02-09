import React from 'react'
import styles from './About.module.scss'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={`col-lg-4 offset-7 ${styles.textcontent}`}>
                <h4 className="h4">Hey Guys, Welcome to my blog</h4>
            </div>
        </div>
    )
}

export default About
