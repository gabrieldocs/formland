import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import pages
import HomePage from "../pages/HomePage";

const PublicRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PublicRouter;