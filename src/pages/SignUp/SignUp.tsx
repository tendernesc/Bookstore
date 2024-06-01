import Footer from "../../components/Footer/Footer";
import SignUpForm from "../../components/Forms/SignUpForm/SignUpForm";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import './SignUp.css'

function SignUp() {
    return ( 
        <div className="sign-up">
            <Header></Header>
            <div className="sign-up-wrapper">
                <Title typeTitle={"page__title"}>Sign Up</Title>
                <SignUpForm></SignUpForm>
                
            </div>
            <Footer></Footer>
        </div> 
    );
}

export default SignUp;