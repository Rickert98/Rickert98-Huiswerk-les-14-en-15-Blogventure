/* =================== Imports ====================================================================================== */

import { NavLink } from 'react-router-dom'

import './navigation.css'

import nav_logo from '../../assets/logo-small.png'

/* =================== Function Navigation ========================================================================== */

function Navigation () {
    return (
        <>
            <nav>
                <div className="nav-logo-wrapper">
                    <img src={nav_logo} alt="company logo"/>
                    <p>BlOgventure</p>
                </div>
                <ul className="nav-list-wrapper">
                    <li>
                        <NavLink className ={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className ={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/all-posts">
                            Alle posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className ={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/new-post">
                            Nieuwe post
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;