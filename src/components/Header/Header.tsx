import './Header.css';
import { useContext, useState, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { IoHeartOutline, IoHeart } from "react-icons/io5"; // Импортируем обе иконки
import { IoBagHandleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { IBook } from '../../types/interfaces';

function Header() {
  const context = useContext(SearchContext);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<IBook[]>([]); 

  useEffect(() => {
    const favoriteBooks = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favoriteBooks);
  }, []); 

  if (!context) {
    throw new Error('SearchContext must be used within a SearchProvider');
  }

  const { setSearchTerm } = context;

  const handleSearchChange = (event: { target: { value: string; }; }) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      alert('Введите текст для поиска');
      return;
    }
    setSearchTerm(inputValue);
    navigate(`/search?query=${inputValue}`);
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to="/" className="header-logo__text">BOOKSTORE</Link>
        </div>
        <form className='header-search' onSubmit={handleSearchSubmit}>
          <div className='header-search-container'>
            <IoSearch className='header-search-container__icon' onClick={handleSearchSubmit} />
            <input
              className='header-search-container__input'
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={handleSearchChange}
            />
          </div>
        </form>
        <div className="header-icons">
          <div className="header-icon-wrapper">
            <Link to={"/favorites"}>
              {favorites.length > 0 ? 
                <div className="heart-icon-wrapper">
                  <IoHeartOutline className='header-icon-wrapper__image' />
                  <div className="red-badge"></div> 
                </div>
                : 
                <IoHeartOutline className='header-icon-wrapper__image' />
              }
            </Link>
            <Link to={"/cart"}>
              <IoBagHandleOutline className='header-icon-wrapper__image' />
            </Link>
            <Link to={"/signin"}>
              <IoPersonOutline className='header-icon-wrapper__image' />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
