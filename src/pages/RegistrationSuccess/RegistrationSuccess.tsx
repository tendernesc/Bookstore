import './RegistrationSuccess.css'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import RegistrationSuccessForm from "../../components/Forms/RegistrationSuccessForm/RegistrationSuccessForm";

function RegistrationSuccess() {
    return ( 
        <div className="registration">
            <Header></Header>
            <div className="registration-wrapper">
                <Title typeTitle={"page__title"}>Reset password</Title>
                <RegistrationSuccessForm></RegistrationSuccessForm>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default RegistrationSuccess;