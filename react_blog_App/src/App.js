import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Footer from './components/Footer';
import Post from './components/Post';

function App() {
    return (
        <div id="main">
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path="/post" element={<Post />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}
export default App;