import './Subscribe.css';
import Title from '../Title/Title';

function Subscribe() {
    return ( 
      <>
        <form className='subscribe'> 
          <div className='subscribe-wrapper'>
            <Title typeTitle='subscribe-wrapper__title'>SUBSCRIBE TO NEWSLETTER</Title>
            <p className='subscribe-wrapper__description'>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
            <div className='subscribe-wrapper-info'>
              <input className='subscribe-wrapper-info__input subscribe-wrapper-info__input_focus' type='email' placeholder='Your email'/>
              <button className='subscribe-wrapper-info__button subscribe-wrapper-info__button_hover' type='submit'>SUBSCRIBE</button>
            </div>
          </div>
        </form>
      </>
    );
}

export default Subscribe;