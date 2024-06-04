import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { FaArrowLeft } from "react-icons/fa6";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";
import { IBook } from "../../types/interfaces";
import Title from "../../components/Title/Title";
import './FavoritesBooks.css'
import { useState } from 'react';

function FavoritesBooks() {
  const [favorites, setFavorites] = useState<IBook[]>(JSON.parse(localStorage.getItem('favorites') || '[]'));

  const removeFromFavorites = (isbn13: string) => {
    const updatedFavorites = favorites.filter(book => book.isbn13 !== isbn13);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const addToCart = (book: IBook) => {
    const cart: IBook[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const bookExists = cart.some(cartBook => cartBook.isbn13 === book.isbn13);

    if (bookExists) {
      alert('Book is already in the cart!');
    } else {
      cart.unshift(book);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Book added to cart!');
    }
  };

  return (
    <>
      <Header />
      <div className='back'>
        <FaArrowLeft className='back__arrow' />
        <div className='back__main'><Link className='back__main back__main_hover' to="/">Back to Home</Link></div>
      </div>
      <Title typeTitle='page__title_favorites'>Favorites</Title>
      {favorites.length === 0 ? (
        <Title typeTitle='page__title_favoritesx'>You haven't added the book to your favorites yet</Title>
      ) : (
        favorites.map((book, index) => (
          <div key={index} className='favorites'>
            <div className='favorites-wrapper'>
              <Link to={`/book/${book.isbn13}`} className='books-info'>
                <img className="books-info-wrapper__image_favorites" src={book.image} alt={book.title} />
              </Link>
            </div>
            <div className='favorites-wrapper-main'>
              <div className='favorites-wrapper-main__description'>{book.subtitle}</div>
              <p className='favorites-wrapper-main__authors'>{book.authors}</p>
              <p className='favorites-wrapper-main__additional'>{book.publisher}, {book.year}</p>
              <p className='favorites-wrapper-main__rating'>RATING: {book.rating}/5</p>
              <p className='favorites-wrapper-main__price'>{book.price}</p>
              <div className="favorites-wrapper-main-wrapper">
                <button 
                  className='favorites-wrapper-main-wrapper__remove' 
                  onClick={() => removeFromFavorites(book.isbn13)}
                >
                  Remove 
                </button>
                <button 
                  className='favorites-wrapper-main-wrapper__add' 
                  onClick={() => addToCart(book)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <Subscribe />
      <Footer />
    </>
  );
}

export default FavoritesBooks;




