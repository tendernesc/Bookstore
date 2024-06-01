import { useEffect, useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { IBooksProps } from '../../types/interfaces';
import { IBook } from '../../types/interfaces';
import { IBooksResponse } from '../../types/interfaces';
import './Books.css';
import { Link } from 'react-router-dom';

function Books({ currentPage }: IBooksProps) {
  const booksPerPage = 9; 
  const [books, setBooks] = useState<IBook[]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<IBook[]>([]);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/new');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: IBooksResponse = await response.json();
        setBooks(data.books);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = Math.min(startIndex + booksPerPage, books.length); 
    setDisplayedBooks(books.slice(startIndex, endIndex));
  }, [currentPage, books]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='books'>
      {displayedBooks.map(book => (
        <Link to={`/book/${book.isbn13}`} className='books-info' key={book.isbn13}>
        <div className='books-info-wrapper'>
          <img className="books-info-wrapper__image" src={book.image} alt={book.title} />
        </div>
        <div className='books-info__description'>{book.subtitle}</div>
        <div className='books-info__author'>{book.author}</div>
        <div className='books-info-main'>
          <div className='books-info-main__price'>{book.price}</div>
          <FaRegBookmark className='books-info-main__rating' />
        </div>
      </Link>
      ))}
    </div>
  );
}

export default Books;
