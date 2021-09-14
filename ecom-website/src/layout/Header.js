import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/mens'>Mens</NavLink></li>
                    <li><NavLink to='womens'>Womens</NavLink></li>
                    <li><NavLink to='basket'>Basket</NavLink></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header;