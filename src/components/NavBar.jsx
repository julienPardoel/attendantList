import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <nav>
                <img src="logoTalis.png" alt=""/>
                <ul>
                    <li><Link rel=""><a href="">Home</a></Link></li>
                    <li><Link rel=""><a href="">Projets</a></Link></li>
                    <li><Link rel=""><a href="">Contacts</a></Link></li>
                </ul>
            </nav>
            
        </div>
    )
}

export default NavBar
