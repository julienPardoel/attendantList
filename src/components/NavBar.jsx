import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <nav>
                <img src="logoTalis.png" alt=""/>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projets">Projets</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </nav>
            
        </div>
    )
}

export default NavBar
