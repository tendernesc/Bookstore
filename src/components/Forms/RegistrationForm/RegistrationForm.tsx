import Button from '../../Button/Button';
import './RegistrationForm.css'
function RegistrationForm() {
    return ( 
            <div className='registration-wrapper'>
                <form className='registration-form'> 
                    <p className="registration-text">
                        <span className="registration-text__line">Please activate your account with the activation </span>
                        <span className="registration-text__line">link in the email<span className="registration-text__line_bold"> example@gmail.com</span></span>
                        <span className="registration-text__line">Please, check your email</span>
                    </p>  
                    <Button isDisabled={false} typeButton={"submit"}>Go to home</Button>
                </form> 
            </div>
        );
}

export default RegistrationForm;