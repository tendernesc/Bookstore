import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IBook } from '../../types/interfaces';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';
import { FaArrowLeft } from "react-icons/fa6";
import './SelectedBooks.css';

function SelectedBooks(): JSX.Element {
  const { isbn } = useParams<{ isbn: string }>();
  const [book, setBook] = useState<IBook | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://api.itbook.store/1.0/books/${isbn}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: IBook = await response.json();
        setBook(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      }
    };

    fetchBook();
  }, [isbn]);

  const addToFavorites = () => {
    if (book) {
      const favorites: IBook[] = JSON.parse(localStorage.getItem('favorites') || '[]');
      favorites.unshift(book);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Book added to favorites!');
    }
  };

  const addToCart = () => {
    if (book) {
      const cart: IBook[] = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.unshift(book);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Book added to cart!');
    }
  };

  if (!book) {
    return <></>;
  }

  return (
    <>
      <Header />
      <div className='back'>
        <FaArrowLeft className='back__arrow' />
        <div className='back__main'><Link className='back__main back__main_hover' to="/">Back to Home</Link></div>
      </div>
      <h2 className='back__title'>{book.title}</h2>
      <p className='back__subtitle'>{book.subtitle}</p>
      <div className='back-wrapper'>
        <img className="back-wrapper__image" src={book.image} alt={book.title} />
        <div className='back-wrapper-main'>
          <p className='back-wrapper-main__price'>{book.price}</p>
          <p className='back-wrapper-main__additional'>Author: <span className='back-wrapper-main__additional_info'>{book.authors}</span></p>
          <p className='back-wrapper-main__additional'>Publisher: <span className='back-wrapper-main__additional_info'>{book.publisher}</span></p>
          <p className='back-wrapper-main__additional'>Language: <span className='back-wrapper-main__additional_info'>{book.language}</span></p>
          <p className='back-wrapper-main__additional'>Format: <span className='back-wrapper-main__additional_info'>Paper book / ebook (PDF)</span></p>
          <button className='back-wrapper-main__button_add' onClick={addToCart}>ADD TO CART</button>
          <button className='back-wrapper-main__button_favorites' onClick={addToFavorites}>ADD TO FAVORITES</button>
        </div>
      </div>
      <div className='desc-wrapper'>
        <span className='desc-wrapper__info'>Description: <div className='desc-wrapper__info_text'>{book.desc}</div></span>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}

export default SelectedBooks;
