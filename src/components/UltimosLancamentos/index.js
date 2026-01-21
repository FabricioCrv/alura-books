import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";
import { Titulo } from "../Titulo";
import livroRecomenda from "../../images/steel_ball_run.png"
import CardRecomenda from "../CardRecomenda";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const LivroImagem = styled.img`
    width: 300px; 
    height: auto; 
`


function UltimosLancamentos() {
    return(
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px">Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
            {livros.map( livro => (
                <LivroImagem key={livro.id} src={livro.src} alt={livro.nome}/>
            ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você goste de:"
                subtitulo="Jojo's Bizarre Adventure Parte 7: Steel Ball Run"
                descricao="a sétima parte da série mangá Jojo's bizarre adventure"
                img={livroRecomenda}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;