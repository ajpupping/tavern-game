import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';

import styles from '../Navbar/Navbar.module.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const getNavLinkClass = ({ isActive }) => {
        return isActive ? `${styles.link} ${styles.activeLink}` : styles.link;
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.menu} >
                <button 
                className={styles.menuBtn} 
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                >
                    {menuOpen ? 'Close' : 'Menu'}
                </button>
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setMenuOpen(false)}>
                    <li><NavLink to="/" className={getNavLinkClass}>Home</NavLink></li>
                    <li><NavLink to="/inventory" className={getNavLinkClass}>Inventory</NavLink></li>
                    <li><NavLink to="/play" className={getNavLinkClass}>Play</NavLink></li>
                    <li><NavLink to="/register" className={getNavLinkClass}>Register</NavLink></li>
                    <li><NavLink to="/login" className={getNavLinkClass}>Login</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;