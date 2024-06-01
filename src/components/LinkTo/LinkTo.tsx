import './LinkTo.css'
import {ILinks} from '../../types/interfaces'

function LinkTo({children}: ILinks) {
    return ( 
    <>
        <a href="#" className="link">{children}</a>
    </> 
    );
}

export default LinkTo;