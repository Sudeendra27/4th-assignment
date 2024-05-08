// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import BookListPage from './BookListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/booklist" element={<BookListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
