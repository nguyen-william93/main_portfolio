import React from 'react'
import {Link} from 'react-router-dom'

export default function Header (){
    return (
        <div className='container my-3'>
            <ul className = 'nav justify-content-center'>
                <li className = 'nav-item mx-4'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='nav-item mx-4'>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li className='nav-item mx-4'>
                    <Link to='/blog'>Blog</Link>
                </li>
            </ul>
        </div>
    )
}