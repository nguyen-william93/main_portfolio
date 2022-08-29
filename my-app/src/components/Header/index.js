import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header (){

    return (
        <div className='container my-3'>
            <ul className = 'nav justify-content-center'>
                <li className = 'nav-item mx-4'>
                    <NavLink to="/" style={({ isActive }) => ({ 
                         color: isActive ? 'white' : 'rgb(13,110,253)' })}>
                        Home
                    </NavLink>
                </li>
                <li className='nav-item mx-4'>
                    <NavLink to="/projects" style={({ isActive }) => ({ 
                         color: isActive ? 'white' : 'rgb(13,110,253)' })}>
                        Projects
                    </NavLink>
                </li>
                <li className='nav-item mx-4'>
                    <NavLink to="/blog" style={({ isActive }) => ({ 
                         color: isActive ? 'white' : 'rgb(13,110,253)' })}>
                        Blog
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
