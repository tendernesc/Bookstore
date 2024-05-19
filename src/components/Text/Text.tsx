import './Text.css'
import {IText} from '../../types/interfaces'

function Text({children, type}: IText) {
    return ( 
        <>
            <p className={type}>{children}</p>
        </> 
    );
}

export default Text;