import BarraPesquisa from "../BarraPesquisa";
import styled from "styled-components";
import { use, useState } from "react";
import {livros} from "./dadosPesquisa"

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);



    return(
        <PesquisaContainer>
            <Titulo>Pesquise por um título</Titulo>
            <BarraPesquisa 
            placeholder="Digite sua pesquisa"
            onBlur={ event => {
                const textoDigitado = event.target.value;
                const resultadoPesquisa = livros.filter(livro => livro.titulo.includes(textoDigitado)
                )
                setLivrosPesquisados(resultadoPesquisa)
            }}
            />
            {livrosPesquisados.map(livro => (
                <Resultado>
                    <p>{livro.titulo}</p>
                    <img src={livro.src}/>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;