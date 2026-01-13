import './style.css';

const opcoesTextos = ['Categorias', 'Minha Estante', 'Favoritos'];
function OpcoesHeader(){
    return(
        <ul className='opcoes'>
          {opcoesTextos.map((texto) => (
            <li className='opcao'>{texto}</li>
          ))}
        </ul>
    )
}

export default OpcoesHeader;