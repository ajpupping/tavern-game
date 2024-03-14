import React from 'react';

import PropTypes from 'prop-types';

import styles from '../Inventory/Inventory.module.css';

export const Inventory = ({gold}) => {

    return (

        <section className={styles.container}>
            <div className={styles.goldDisplay}>
                Gold: {gold}
            </div>


            <h2 className={styles.title}>View Your Inventory</h2>
            <div className={styles.card}>
                <ul className={styles.list}>
                    <li>Ale: 12 kegs</li>
                    <li>Bread: 50 loaves</li>
                    <li>Cheese: 3 wheels</li>
                </ul>
            </div>
        </section>

    );
}

export default Inventory;

Inventory.propTypes = {
    gold: PropTypes.number.isRequired
};