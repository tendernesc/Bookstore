import './SignInForm.css';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import LinkTo from '../../LinkTo/LinkTo';
import Text from '../../Text/Text';
import { Link } from 'react-router-dom';

function SignInForm() {
    return ( 
        <div className='form-wrapper'>
            <form className='sign-in-form'>
                <div className="sign-in-inputs">
                    <Input title='Email' isDisabled={false} type='email' placeholder='Your email'></Input>
                    <Input title='Password' isDisabled={false} type='password' placeholder='Your password'></Input>
                </div>
                <div className="passwd-link">
                    <Link to={"/resetPass"} className='passwd-link__forgot'>
                        <LinkTo>Forgot password?</LinkTo>
                    </Link>
                    
                </div>
                    <Button isDisabled={false} typeButton={"submit"}>Sign In</Button>
            </form> 
            <div className="sign-in-link">
                <Text type='help'>Don't have an account?</Text>
                <Link to={"/signup"} className='sign-in-link__sign'>
                    <LinkTo>Sign Up</LinkTo>
                </Link>
            </div>
        </div>
    );
}

export default SignInForm;