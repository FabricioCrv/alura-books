import logo from '../../images/logo.svg';
import './style.css';

function Logos(){
    return (
        <div className='logo'>
          <img src={logo}
          alt='Logo da empresa' 
          className='logo-img'></img>
          <p><strong>AluraBooks</strong></p>
        </div>
    );
}

export default Logos;