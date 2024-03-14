import React from 'react';

import styles from '../Home/Home.module.css';

export const Home = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Welcome to The Tavern</h2>
            <p className={styles.card}>Serve drinks and food to weary adventurers, and earn rewards along the way.</p>
        </section>

    );
}

export default Home;