import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import LiveChat from './routes/chat';
import HomePage from './routes/home';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="livechat" element={<LiveChat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
