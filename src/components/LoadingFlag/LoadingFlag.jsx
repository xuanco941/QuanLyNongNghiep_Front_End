import React from 'react';
import { RotatingLines } from 'react-loader-spinner'
import styles from './index.module.css'
function LoadingFlag({ isLoading }) {
    if (isLoading) {
        return (
            <div className={styles.loaderOverlay}>
                <RotatingLines strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="50"
                    visible={true} />
            </div>
        )
    }
    return null;
}

export default LoadingFlag;