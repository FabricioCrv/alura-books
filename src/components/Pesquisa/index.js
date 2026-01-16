import BarraPesquisa from "../BarraPesquisa";
import styled from "styled-components";
import { use, useState } from "react";

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

function Pesquisa(){
    const [textoDigitado, setTextoDigitado] = useState("");

    return(
        <PesquisaContainer>
            <Titulo>Pesquise por um título</Titulo>
            <BarraPesquisa 
            placeholder="Digite sua pesquisa"
            onBlur={ event => setTextoDigitado(event.target.value)}
            />
            <p>{textoDigitado}</p>
        </PesquisaContainer>
    )
}

export default Pesquisa;