import './Button.css';
import {IButton} from '../../types/interfaces'

function Button({children, isDisabled, typeButton}: IButton) {

    return ( 
        <>
        <button disabled={isDisabled} className={typeButton}>{children}</button>
        </>
    );
}

export default Button;