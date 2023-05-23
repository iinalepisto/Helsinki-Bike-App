import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
    return (
        <>
            <nav className='navBar' >
                <ul className='navList'>
                    <li className='navItem'>
                        <Link to="/" className='link navLink'>Etusivu</Link>
                    </li>
                    <li className='navItem'>
                        <Link to="/journeys" className='link navLink'>Matkat</Link>
                    </li>
                    <li className='navItem'>
                        <Link to="/stations" className='link navLink'>Asemat</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;