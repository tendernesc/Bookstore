import Button from '../../Button/Button';
import './RegistrationSuccessForm.css'
import { Link } from 'react-router-dom';

function RegistrationSuccessForm() {
    return ( 
            <div className='registration-wrapper'>
                <form className='registration-form'> 
                    <p className="registration-text">
                        <span className="registration-text__line">Email confirmed.</span>
                        <span className="registration-text__line">An email has been sent to your email to reset your password.</span>
                    </p>  
                    <Link to={"/"}>
                        <Button isDisabled={false} typeButton={"submit"}>Go to home</Button>
                    </Link>
                </form> 
            </div>
        );
}

export default RegistrationSuccessForm;