import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Chat } from "./chat";
import { Login } from "./login";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <div>
                <h1>Socket.io Chat App</h1>
                <Routes>
                    <Route path="/login" element={
                        isLoggedIn ? <Navigate to="/chat" /> : <Login onLogin={handleLogin} />
                    } />
                    <Route path="/chat" element={
                        isLoggedIn ? <Chat onLogout={handleLogout} /> : <Navigate to="/login" />
                    } />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
