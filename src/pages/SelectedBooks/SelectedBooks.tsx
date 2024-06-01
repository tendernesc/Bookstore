import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {IBook} from '../../types/interfaces'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';
import { FaArrowLeft } from "react-icons/fa6";
import './SelectedBooks.css'





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


  if (!book) {
    return <></>;
  }

  return (
    <>
      <Header></Header>
        <div className='back'>
          <FaArrowLeft className='back__arrow'></FaArrowLeft>
          <div className='back__main'><Link className='back__main back__main_hover' to="/">Back to Home</Link></div>
        </div>
        <h2 className='back__title'>{book.title}</h2>
        <p className='back__subtitle'>{book.subtitle}</p>
        <div className='back-wrapper'>
          <img className="back-wrapper__image" src={book.image} alt={book.title} /> 
          <div className='back-wrapper-main'>
            <p className='back-wrapper-main__price'>{book.price}</p>
            <p className='back-wrapper-main__additional'>Author: <span className='back-wrapper-main__additional_info'>Alex Lehlik</span></p>
            <p className='back-wrapper-main__additional'>Publisher: <span className='back-wrapper-main__additional_info'>Apress, 2022</span></p>
            <p className='back-wrapper-main__additional'>Language: <span className='back-wrapper-main__additional_info'>English</span></p>
            <p className='back-wrapper-main__additional'>Format: <span className='back-wrapper-main__additional_info'>Paper book / ebook (PDF)</span></p>
            <button className='back-wrapper-main__button_add'>ADD TO CART</button>
            <button className='back-wrapper-main__button_favorites'>ADD TO FAVORITES</button>
          </div>
        </div>
        <div className='desc-wrapper'>
          <span className='desc-wrapper__info'>Description: <div className='desc-wrapper__info_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium pariatur dignissimos consequatur, voluptas itaque reiciendis totam perspiciatis praesentium ipsum quae laudantium officia deleniti porro alias tenetur fugit culpa quod quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem nemo quidem, facere dolor voluptatum veritatis explicabo neque pariatur perferendis officia voluptate aut modi quam temporibus laboriosam. Voluptate, perferendis repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id quod, totam incidunt voluptatem hic, et quae architecto doloremque nemo fuga? Voluptatum error incidunt obcaecati amet aliquid maiores cumque nemo?</div></span>
        </div>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}

export default SelectedBooks;
