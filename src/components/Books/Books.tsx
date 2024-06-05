import { useEffect, useState } from 'react';
import { PiBookmarksSimple, PiBookmarksSimpleFill } from "react-icons/pi";
import { IBooksProps, IBook } from '../../types/interfaces';
import './Books.css';
import Spinner from '../Spinner/Spinner'; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../slice/BookStoreSlice';

function Books({ currentPage }: IBooksProps) {
  const booksPerPage = 9; 
  const [displayedBooks, setDisplayedBooks] = useState<IBook[]>([]);
  const [favorites, setFavorites] = useState<IBook[]>(JSON.parse(localStorage.getItem('favorites') || '[]'));

  const dispatch = useDispatch()<any>;
  const Books = useSelector((state:any) => state.Books);
  const status = useSelector((state:any) => state.status);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'fulfilled' && Books.length > 0) {
      const startIndex = (currentPage - 1) * booksPerPage;
      const endIndex = Math.min(startIndex + booksPerPage, Books.length); 
      setDisplayedBooks(Books.slice(startIndex, endIndex));
    }
  }, [currentPage, Books, status]);

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

  if (status === 'pending') {
    return <Spinner />;
  }

  if (status === 'rejected') {
    return <div>Error: Unable to fetch books</div>;
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






