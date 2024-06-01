import Footer from '../../components/Footer/Footer';
import NewPasswordForm from '../../components/Forms/NewPasswordForm/NewPasswordForm';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import './NewPassword.css';

function NewPassword() {
    return ( 
        <div className='new-password'>
            <Header></Header>
            <div className="new-password-wrapper">
                <Title typeTitle={"form__title"}>New password</Title>
                <NewPasswordForm></NewPasswordForm>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default NewPassword;