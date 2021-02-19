import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <nav>
                <img src="logoTalis.png" alt=""/>
                <ul>
                    <li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                    <li><NavLink to="/projets" activeClassName="selected">Projets</NavLink></li>
                    <li><NavLink to="/contacts" activeClassName="selected">Contacts</NavLink></li>
                </ul>
            </nav>
            
        </div>
    )
}

export default NavBar
