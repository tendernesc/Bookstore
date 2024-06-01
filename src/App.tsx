import './App.css';
import Main from './pages/Main/Main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NewPassword from './pages/NewPassword/NewPassword';
import Registration from './pages/Registration/Registration';
import RegistrationSuccess from './pages/RegistrationSuccess/RegistrationSuccess';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Reset from './pages/ResetPass/Reset';
import SelectedBooks from './pages/SelectedBooks/SelectedBooks';



function App() {
  return (
  <>
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} ></Route>
          <Route path='/newpassword' element={<NewPassword></NewPassword>}></Route>
          <Route path='/registration' element={<Registration></Registration>}></Route>
          <Route path='/registrsuccess' element={<RegistrationSuccess></RegistrationSuccess>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/resetPass' element={<Reset></Reset>}></Route>
          <Route path='/book/:isbn' element={<><SelectedBooks /></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
