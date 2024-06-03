import { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaRegBookmark } from 'react-icons/fa';
import { IBook } from '../../types/interfaces';
import { IBooksResponse } from '../../types/interfaces';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import Header from '../Header/Header';
import './SearchResults.css';
import '../Books/Books.css';
import '../../pages/SelectedBooks/SelectedBooks.css'
import Title from '../Title/Title';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import { FaArrowLeft } from "react-icons/fa6";

function SearchResults() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const context = useContext(SearchContext);
  const query = searchParams.get('query') || '';

  if (!context) {
    throw new Error('SearchContext must be used within a SearchProvider');
  }

  const { searchTerm, setSearchTerm } = context;

  useEffect(() => {
    setSearchTerm(query);

    const fetchBooks = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/new');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: IBooksResponse = await response.json();
        const filteredBooks = data.books.filter(book =>
          book.title.toLowerCase().includes(query.toLowerCase())
        );
        setBooks(filteredBooks);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      }
    };

    fetchBooks();
  }, [query, setSearchTerm]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <div className='back'>
          <FaArrowLeft className='back__arrow'></FaArrowLeft>
          <div className='back__main'>
            <Link className='back__main back__main_hover' to="/">Back to Home</Link>
        </div>
        </div>
      {books.length > 0 && (
        <>
        <Title typeTitle='page__title_search'>SEARCH RESULT for "{searchTerm}"</Title>
        <div className='result-count'>Found {books.length} results</div>
        </>
      )}
      <div className='result-wrapper'>
        {books.length === 0 ? (
          <div className='result-wrapper__not'>No results found for "{searchTerm}"</div>
        ) : (
          <div className='books'>
            {books.map(book => (
              <Link to={`/book/${book.isbn13}`} className='books-info' key={book.isbn13}>
                <div className='books-info-wrapper'>
                  <img className="books-info-wrapper__image" src={book.image} alt={book.title} />
                </div>
                <div className='books-info__description'>{book.subtitle}</div>
                <div className='books-info__author'>{book.authors}</div>
                <div className='books-info-main'>
                  <div className='books-info-main__price'>{book.price}</div>
                  <FaRegBookmark className='books-info-main__rating' />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}

export default SearchResults;

