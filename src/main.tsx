import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Pages/HomePage'
import AddPost from './Pages/AddPost'
import PostPage from './Pages/PostPage'
import './assets/styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AnimatePresence>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add-post" element={<AddPost />} />
                    <Route path="/post/:id" element={<PostPage />} />
                    <Route path="/*" element={<HomePage />} />
                </Routes>
            </Router>
        </AnimatePresence>
    </React.StrictMode>
)

//TODO?? blad formularza przy f5
//TODO filtoranie kometarzy i postow
//TODO reakcje przy postach
