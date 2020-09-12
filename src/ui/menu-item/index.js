import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './menuitem.module.scss'

const MenuItem = ({ path, label, icon }) => {
    return (
        <NavLink exact to={path} className={styles.menu_item} activeClassName={styles.active}>
            {label}
        </NavLink>
    )
}

export default MenuItem
