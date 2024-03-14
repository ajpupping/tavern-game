import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/Home.jsx';
import InventoryPage from './components/Inventory/Inventory.jsx';
import PlayPage from './components/Play/Play.jsx';
import RegisterPage from './components/Register/Register.jsx';
import LoginPage from './components/Login/Login.jsx';
import NotFoundPage from './components/NotFound/NotFound.jsx';


import styles from './styles/App.module.css';

import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';

function App() {
    return (
        <div className={styles.App}>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/play" element={<PlayPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
    </div>
    );
}

export default App;