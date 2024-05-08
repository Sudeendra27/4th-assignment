// BookListPage.js 
import React, { useState } from 'react';
import './BookListPage.css';
import { useNavigate } from 'react-router-dom';

function BookListPage() {
  const [books, setBooks] = useState([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewBookTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBookTitle.trim() === '') return;
    const newBook = {
      id: Date.now(),
      title: newBookTitle.trim()
    };
    setBooks([...books, newBook]);
    setNewBookTitle('');
  };

  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };
  const handleLogout =() =>{
    navigate('/');
  }

  return (
    <div className="App">
      <h1>My Book List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter book title"
          value={newBookTitle}
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <span>{book.title}</span>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}


export default BookListPage;

