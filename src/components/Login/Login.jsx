import React from 'react';

import styles from '../Login/Login.module.css';

export const Login = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Login</h2>
            <div>
                <form className={styles.form}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div>
                        <button className={styles.button}>Login</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;