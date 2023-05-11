import React from 'react'
import styles from './index.css'


const Status = () => {
    return (
        <div className={`d-flex ${styles.gap10}`}>
            <div className={`${styles.item} ${styles.backgroundGreen}`}>M</div>
            <div className={styles.item}>E</div>
            <div className={styles.item}>A</div>
        </div>
    )
}

export default Status