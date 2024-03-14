import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styles from '../Play/Play.module.css';

export const Play = ({gold, updateGold}) => {
    
// Draw card mechanic
    const drawCard = () => {
        // Add logic for drawing cards here
        // For testing, increase the gold every time the button is clicked
        updateGold(1);
    };

// Dice roll mechanic
    const [diceRoll, setDiceRoll] = useState(null);

    const rollD20 = () => {
        const roll = Math.floor(Math.random() * 20) + 1;
        setDiceRoll(roll);
    };

    const rollD6 = () => {
        const roll = Math.floor(Math.random() * 6) + 1;
        setDiceRoll(roll);
    };

    return (
        <section className={styles.container}>
            <div className={styles.goldDisplay}>
                Gold: {gold}
            </div>

            <div className={styles.diceRoll}>
                <button className={styles.button} onClick={rollD20}>Roll D20</button>
                <button className={styles.button} onClick={rollD6}>Roll D6</button>
                <p>Roll Results: {diceRoll}</p>
            </div>

            <h1 className={styles.title}>Click Draw a Card to begin</h1>
            <div>
                <button className={styles.button} onClick={drawCard}>Draw a Card</button>
            </div>
            <div className={styles.card}>
                <p>Customer orders and random events will display here.</p>
            </div>
        </section>

    );
}

export default Play;

Play.propTypes = { 
    gold: PropTypes.number.isRequired, 
    updateGold: PropTypes.func.isRequired
};