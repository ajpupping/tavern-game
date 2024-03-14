import React from 'react';

import styles from '../Register/Register.module.css';

export const Register = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Create a New Account</h2>
            <div>
                <form className={styles.form}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div>
                        <button className={styles.button}>Register</button>
                    </div>
                </form>
            </div>
        </section>

    );
}

export default Register;