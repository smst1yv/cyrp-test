import React from 'react'
import { Link } from 'react-router-dom'
import styles from './start.module.css'


const Start = () => {

    return (
        <>
            <div className={styles.fulldi}>
                <div className={styles.websitename}>
                    <h2>Turkiye Bahis Sitesi</h2>
                </div>
                <div className={styles.container}>
                    <div className={styles.holder}><div className={styles.box}></div></div>
                    <div className={styles.holder}><div className={styles.box}></div></div>
                    <div className={styles.holder}><div className={styles.box}></div></div>
                </div>
                <div className={styles.started}>
                    <Link to='/login'>Get Started</Link>
                </div>
            </div>
        </>
    )
}

export default Start
