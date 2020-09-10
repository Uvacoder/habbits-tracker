import React from 'react'
import styles from './layout.module.scss'
import Navbar from './navbar'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout
