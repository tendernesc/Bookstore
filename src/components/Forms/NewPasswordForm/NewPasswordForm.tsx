import './NewPasswordForm.css';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

function NewPasswordForm() {
    return ( 
        <>
            <form className='new-password-form'> 
                <Input title='Password' isDisabled={false} type='password' placeholder='Your password'></Input> 
                <Input title='Confirm password' isDisabled={false} type='password' placeholder='Confirm your password'></Input> 
                <Button isDisabled={false} typeButton={"submit"}>Set password</Button>
            </form>
        </>
    );
}

export default NewPasswordForm;