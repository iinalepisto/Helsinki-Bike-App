import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
    return (
        <>
            <nav className='navBar' >
                <ul className='navList'>
                    <li className='navItem'>
                        <Link to="/" className='link'>Home</Link>
                    </li>
                    <li className='navItem'>
                        <Link to="/journeys" className='link'>Journeys</Link>
                    </li>
                    <li className='navItem'>
                        <Link to="/stations" className='link'>Stations</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;