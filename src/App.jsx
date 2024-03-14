import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Importing page components
import HomePage from './components/Home/Home';
import Play from './components/Play/Play';
import Inventory from './components/Inventory/Inventory';
import RegisterPage from './components/Register/Register';
import LoginPage from './components/Login/Login';
import NotFoundPage from './components/NotFound/NotFound';

// Importing styles
import styles from './styles/App.module.css';

// Importing shared components
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
    // State to track the amount of gold the player has
    const [gold, setGold] = useState(100);

    // Function to update the gold amount, used by child components (inventory and play)
    const updateGold = (amount) => {
        setGold(gold + amount);
    };

    return (
        <div className={styles.App}>
            <Header />

            <Routes>
                {/* Displays Home on root path */}
                <Route path="/" element={<HomePage />} />

                {/* Pass gold and updateGold as props directly to Play and Inventory */}
                <Route path="/play" element={<Play gold={gold} updateGold={updateGold} />} />
                <Route path="/inventory" element={<Inventory gold={gold} />} />

                {/* Register and Login pages */}
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* 404 page */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;