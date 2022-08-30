import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header (){

    return (
        <div className='container my-2 navbar justify-content-center'>
            <ul className = 'nav justify-content-center'>
                <li className = 'nav-item mx-4'>
                    <NavLink to="/" style={({ isActive }) => ({ 
                         color: isActive ? 'white' : 'grey' })}>
                        Home
                    </NavLink>
                </li>
                <li className='nav-item mx-4'>
                    <NavLink to="/projects" style={({ isActive }) => ({ 
                         color: isActive ? 'white' : 'grey' })}>
                        Projects
                    </NavLink>
                </li>
                <li className='nav-item mx-4'>
                    <NavLink to="/blog" style={({ isActive }) => ({ 
                         color: isActive ? 'white' : 'grey' })}>
                        Blog
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
