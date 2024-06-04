import './App.css';
import Main from './pages/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewPassword from './pages/NewPassword/NewPassword';
import Registration from './pages/Registration/Registration';
import RegistrationSuccess from './pages/RegistrationSuccess/RegistrationSuccess';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Reset from './pages/ResetPass/Reset';
import SelectedBooks from './pages/SelectedBooks/SelectedBooks';
import SearchResults from './components/SearchResults/SearchResults';
import { SearchProvider } from './context/SearchContext';
import FavoritesBooks from './pages/FavoritesBooks/FavoritesBooks';
import Basket from './pages/Basket/Basket';

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/favorites' element={<FavoritesBooks/>}/>
          <Route path="/cart" element={<Basket/>}/>
          <Route path='/newpassword' element={<NewPassword />} />
          *<Route path='/registration' element={<Registration />} />
          <Route path='/registrsuccess' element={<RegistrationSuccess />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/resetPass' element={<Reset />} />
          <Route path='/book/:isbn' element={<SelectedBooks />} />
          <Route path='/search' element={<SearchResults />} /> 
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;


