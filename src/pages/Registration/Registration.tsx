import Footer from "../../components/Footer/Footer";
import RegistrationForm from "../../components/Forms/RegistrationForm/RegistrationForm";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import './Registration.css'
function Registration() {
    return ( 
        <div className="registration">
            <Header></Header>
            <div className="registration-wrapper">
                <Title typeTitle={"page__title"}>Registration Confirmation</Title>
                <RegistrationForm></RegistrationForm>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Registration;