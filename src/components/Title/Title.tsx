import './Title.css';
import { ITitle } from '../../types/interfaces';

function Title({children, typeTitle}: ITitle){
  return (
  <>
    <p className={typeTitle}>{children}</p>
  </>
  );
}

export default Title;