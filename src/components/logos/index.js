import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  margin-right: 50px;
`
const LogoImage = styled.img`
    margin-right: 10px;
`

function Logos(){
    return (
        <LogoContainer>
          <LogoImage
          src={logo}
          alt='Logo da empresa'></LogoImage>
          <p><strong>AluraBooks</strong></p>
        </LogoContainer>
    );
}

export default Logos;