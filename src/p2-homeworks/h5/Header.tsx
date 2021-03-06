import React from 'react'
import { NavLink } from 'react-router-dom';
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={({ isActive }) => (isActive ? s.active : s.link)}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>junior+</NavLink>
            {/*<div className={s.error}></div>*/}
        </div>
    )
}

export default Header
// className={({ isActive }) => (isActive ? 's.active' : 's.link')}

// <NavLink to={PATH.PRE_JUNIOR} className={({ isActive }) => (isActive ? 's.active' : 's.link')}>pre-junior</NavLink>
// <NavLink to={PATH.JUNIOR}className={s.link} >junior</NavLink>
// <NavLink to={PATH.JUNIOR_PLUS}className={s.link} >junior+</NavLink>