import Footer from "../../components/Footer/Footer";
import SignInForm from "../../components/Forms/SignInForm/SignInForm";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import './SignIn.css'

function SignIn() {
    return ( 
        <div className="sign-in">
            <Header></Header>
            <div className="sign-in-wrapper">
                <Title typeTitle={"page__title"}>Sign In</Title>
                <SignInForm></SignInForm>  
            </div>
            <Footer></Footer>
        </div> 
    );
}

export default SignIn;