import './style.css';
import Logos from '../logos';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';

function Header(){
    return(
        <header className='App-header'>
            <Logos></Logos>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
        </header>
    )
}

export default Header;