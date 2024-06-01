import './Input.css';
import {IInput} from '../../types/interfaces'

function Input({title, isDisabled, type, placeholder}: IInput) {
    return ( 
        <div className="input">
            <label htmlFor="input-id" className="input-title">{title}</label>
            <input disabled={isDisabled} id="input-id" type={type} className="input-text" placeholder={placeholder}/>
        </div>
    );
}

export default Input;