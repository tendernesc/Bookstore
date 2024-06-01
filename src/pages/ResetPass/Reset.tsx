import Footer from '../../components/Footer/Footer';
import ResetForm from '../../components/Forms/ResetForm/ResetForm';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import './Reset.css';

function Reset() {
    return ( 
        <div className='reset'>
            <Header></Header>
            <div className="reset-wrapper">
                <Title typeTitle={"page__title"}>Reset password</Title>
                <ResetForm></ResetForm>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Reset;