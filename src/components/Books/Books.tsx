import { useEffect, useState } from 'react';
import { PiBookmarksSimple } from "react-icons/pi";
import { PiBookmarksSimpleFill } from "react-icons/pi";
import { IBooksProps, IBook, IBooksResponse } from '../../types/interfaces';
import './Books.css';
import Spinner from '../Spinner/Spinner'; 
import { Link } from 'react-router-dom';

function Books({ currentPage }: IBooksProps) {
  const booksPerPage = 9; 
  const [books, setBooks] = useState<IBook[]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<IBook[]>([]);
  const [favorites, setFavorites] = useState<IBook[]>(JSON.parse(localStorage.getItem('favorites') || '[]'));
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/new');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: IBooksResponse = await response.json();
        const detailedBooks = await Promise.all(data.books.map(async (book: IBook) => {
          const detailedResponse = await fetch(`https://api.itbook.store/1.0/books/${book.isbn13}`);
          if (!detailedResponse.ok) {
            throw new Error(`HTTP error! status: ${detailedResponse.status}`);
          }
          return detailedResponse.json();
        }));
        setBooks(detailedBooks);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = Math.min(startIndex + booksPerPage, books.length); 
    setDisplayedBooks(books.slice(startIndex, endIndex));
  }, [currentPage, books]);

  const toggleFavorite = (book: IBook) => {
    const isFavorite = favorites.some(favBook => favBook.isbn13 === book.isbn13);
    let updatedFavorites: IBook[];

    if (isFavorite) {
      updatedFavorites = favorites.filter(favBook => favBook.isbn13 !== book.isbn13);
    } else {
      updatedFavorites = [...favorites, book];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return <Spinner />; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='books'>
      {displayedBooks.map(book => {
        const isFavorite = favorites.some(favBook => favBook.isbn13 === book.isbn13);

        return (
          <div className='books-item' key={book.isbn13}>
            <div className='books-info-wrapper'>
              <Link to={`/book/${book.isbn13}`} className='books-info'>
                <img className="books-info-wrapper__image" src={book.image} alt={book.title} />
              </Link>
            </div>
            <div className='books-info__description'>{book.title}</div>
            <div className='books-info__author'>{book.publisher}</div>
            <div className='books-info-main'>
              <div className='books-info-main__price'>{book.price}</div>
              {isFavorite ? (
                <PiBookmarksSimpleFill
                  className='books-info-main__rating books-info-main__rating--active'
                  onClick={() => toggleFavorite(book)}
                />
              ) : (
                <PiBookmarksSimple
                  className='books-info-main__rating'
                  onClick={() => toggleFavorite(book)}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Books;





