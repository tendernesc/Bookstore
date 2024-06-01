import './ResetForm.css';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import { Link } from 'react-router-dom';

function ResetForm() {
    return ( 
        <>
            <form className='reset-form'> 
                <Input title='Email' isDisabled={false} type='email' placeholder='Your email'></Input> 
                <Link to={"/registrsuccess"}>
                    <Button isDisabled={false} typeButton={"submit"}>Reset</Button>
                </Link> 
            </form>
        </>
    );
}

export default ResetForm;