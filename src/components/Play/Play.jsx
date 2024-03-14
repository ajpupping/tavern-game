import React, { useState } from 'react';

import styles from '../Play/Play.module.css';

export const Play = () => {
    const [gold, setGold] = useState(100);

    return (
        <section className={styles.container}>
            <div className={styles.goldDisplay}>
                Gold: {gold}
            </div>

            <h1 className={styles.title}>Click Draw a Card to begin</h1>
            <div>
                <button className={styles.button}>Draw a Card</button>
            </div>
            <div className={styles.card}>
                <p>Customer orders and random events will display here.</p>
            </div>
        </section>

    );
}

export default Play;