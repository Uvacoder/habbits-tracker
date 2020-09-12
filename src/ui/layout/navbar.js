import React from 'react'
import { NAVIGATION } from '../../helper/constants'
import MenuItem from '../menu-item'
import { NavLink } from 'react-router-dom'
import { navbar, menu, logo, hr } from './layout.module.scss'

const Navbar = () => {
    return (
        <>
        <div className={navbar}>
            <div className={menu}>
                {
                    NAVIGATION.map( item => (
                        <MenuItem path={item.path} label={item.label} icon={item.icon} />
                    ))
                }
            </div>
            <NavLink to="/" className={logo}>habb.it</NavLink>
        </div>
        <hr className={hr} />
        </>
    )
}

export default Navbar
