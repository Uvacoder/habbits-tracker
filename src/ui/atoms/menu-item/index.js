import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './menuitem.module.scss'

const MenuItem = ({ path, label, icon }) => {
    return (
        <NavLink exact to={path} className={styles.menu_item} activeClassName={styles.active}>
            <span> {label} </span>
            {icon}
        </NavLink>
    )
}

export default MenuItem
