import './App.css';
import Logos from './components/logos';
import perfil from './images/perfil.svg';
import sacola from './images/sacola.svg';

const opcoesTextos = ['Categorias', 'Minha Estante', 'Favoritos'];
const icones = [ perfil, sacola ];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logos></Logos>
        <ul className='opcoes'>
          {opcoesTextos.map((texto) => (
            <li className='opcao'>{texto}</li>
          ))}
        </ul>

        <ul className='icones'>
          {icones.map((icone) => (
            <li className='icone'><img src={icone}></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
