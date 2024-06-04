import { useState } from 'react';
import Books from '../../components/Books/Books';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Pagination from '../../components/Pagination/Pagination';
import Subscribe from '../../components/Subscribe/Subscribe';
import Title from '../../components/Title/Title';
import './Main.css';

function Main() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 3; 

  return (
    <>
      <Header />
      <Title typeTitle='page__title'>NEW RELEASES BOOKS</Title>
      <Books currentPage={currentPage} books={[]} totalPages={0} />
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={(page: number) => setCurrentPage(page)} 
      /> 
       <Subscribe />
      <Footer />    
    </>
  );
}

export default Main;