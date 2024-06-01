import './Header.css'
import { IoSearch } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import LinkTo from '../LinkTo/LinkTo';


function Header(){
  return ( 
    <>
        <header className="header">
          <div className="header-logo">
            <Link to="/" className="header-logo__text">BOOKSTORE</Link>
          </div>
            <form className='header-search'>
              <div className='header-search-container'>
                <IoSearch className='header-search-container__icon' />
                <input className='header-search-container__input' type="text" placeholder="Search..." />
              </div>
            </form>
            <div className="header-icons">
              <div className="header-icon-wrapper">
                <IoHeartOutline className='header-icon-wrapper__image' />
                <IoBagHandleOutline className='header-icon-wrapper__image' />
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