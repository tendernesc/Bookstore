import { useState} from 'react';
import { IBook } from '../../types/interfaces';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Title/Title';
import './Basket.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

function Basket() {
  const initialCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState<IBook[]>(initialCart);
  const [quantities, setQuantities] = useState<Record<string, number>>(
    initialCart.reduce((acc: Record<string, number>, book: IBook) => {
      acc[book.isbn13] = 1; 
      return acc;
    }, {})
  );

  const removeFromCart = (isbn13: string) => {
    const updatedCart = cart.filter(book => book.isbn13 !== isbn13);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[isbn13];
    setQuantities(updatedQuantities);
  };

  const increaseQuantity = (isbn13: string) => {
    setQuantities({
      ...quantities,
      [isbn13]: quantities[isbn13] + 1,
    });
  };

  const decreaseQuantity = (isbn13: string) => {
    if (quantities[isbn13] > 1) {
      setQuantities({
        ...quantities,
        [isbn13]: quantities[isbn13] - 1,
      });
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, book) => {
      const price = parseFloat(book.price.replace('$', ''));
      return total + (price * (quantities[book.isbn13] || 1));
    }, 0).toFixed(2);
  };

  const handleBuyNow = () => {
    alert('Sorry, not yet :(');
  };

  return (
    <>
      <Header />
      <div className='back'>
        <FaArrowLeft className='back__arrow' />
        <div className='back__main'><Link className='back__main back__main_hover' to="/">Back to Home</Link></div>
      </div>
      <Title typeTitle='page__title_favorites'>YOUR CART</Title>
      {cart.length === 0 ? (
        <Title typeTitle='page__title_cart'>Your cart is empty</Title>
      ) : (
        <>
          {cart.map((book, index) => (
            <div key={index} className='cart-item'>
              <div className='cart-item-wrapper'>
                <Link to={`/book/${book.isbn13}`} >
                  <img className="cart-item-wrapper__image" src={book.image} alt={book.title} />
                </Link>
                <div className='cart-item-wrapper-main'>
                  <div className='cart-item-wrapper-main__description'>{book.subtitle}</div>
                  <p className='cart-item-wrapper-main__authors'>{book.authors}</p>
                  <p className='cart-item-wrapper-main__additional'>{book.publisher}, {book.year}</p>
                  <div className='cart-item-quantity'>
                    <button className='cart-item-quantity__up' onClick={() => decreaseQuantity(book.isbn13)}>-</button>
                    <span className='cart-item-quantity__number'>{quantities[book.isbn13]}</span>
                    <button className='cart-item-quantity__down' onClick={() => increaseQuantity(book.isbn13)}>+</button>
                  </div>
                </div>
                <div className='cart-item-wrapper-click'>
                  <p className='cart-item-wrapper-click__price'>
                    ${(parseFloat(book.price.replace('$', '')) * (quantities[book.isbn13] || 1)).toFixed(2)}
                  </p>
                  <ImCross 
                    className='cart-item-wrapper-click__remove' 
                    onClick={() => removeFromCart(book.isbn13)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className='cart-summary'>
            <p className='cart-summary__total'>Total: ${calculateTotal()}</p>
            <button 
              className='cart-summary__buy'
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default Basket;




