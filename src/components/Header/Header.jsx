import React from 'react';

import styles from '../Header/Header.module.css';

import { Navbar } from '../Navbar/Navbar.jsx';

export const Header = () => {
    return (
        <section>
            <div className={styles.Header}>
                <h1 className={styles.title}>The Tavern</h1>
                <p className={styles.tagline}>A solo rpg</p>
            </div>
            <Navbar />

        </section>
    );
};

export default Header;