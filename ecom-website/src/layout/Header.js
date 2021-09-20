import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';




const Header = props => {

    const logInHandler = () => {
        props.loginModel(true)
    }

    return (
        <header className='container-fluid'>
            <nav className={`row flex-direction-row flex header ${styles.header}`}>
                <div className='col-xs-3 flex justify-content-center align-items-aligncenter'>
                    test text
                </div>
                <ul className='col-xs-6 flex-direction-row flex justify-content-center align-items-aligncenter'>
                    <li className={`p-1 ${styles.nav__link}`}><NavLink to='/'>Home</NavLink></li>
                    <li className={`p-1 ${styles.nav__link}`}><NavLink to='/mens'>Mens</NavLink></li>
                    <li className={`p-1 ${styles.nav__link}`}><NavLink to='womens'>Womens</NavLink></li>
                    <li className={`p-1 ${styles.nav__link}`}><NavLink data-testid="basket-router-link" to='basket'>Basket</NavLink></li>
                </ul>
                <div className='col-xs-3 flex justify-content-flexend align-items-aligncenter'>
                    <button type="button" aria-label="login in" onClick={ logInHandler }>
                        <FontAwesomeIcon data-testid="log-in" icon={faUserCircle}/>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;