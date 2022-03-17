import React, { Component } from "react";
import About from "./components/About";
import Button from "./components/btn";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 5vh 2vw 0 2vw;
    padding: 0;
    font-family: 'Hubballi', cursive;
  }
  body{
    background-color: #000;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  color: #cf5c36;
`;

const Container = styled.div`
  width: 100%;
`;

const ContBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const SubTitle = styled.h5`
  font-size: 40px;
  color: #cf5c36;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Title>Olá,</Title>
        <About
          nome="Gabriel"
          idade="17 anos"
          estudando="programação front-end."
        />
        <ContBtn>
          <Button button="Mais projetos" />
          <Button button="Google" />
          <Button button="Inicio" />
          <Button button="Sobre" />
          <Button button="Contato" />
        </ContBtn>
        <SubTitle>Perdão por esse crime ao design</SubTitle>
      </Container>
    );
  }
}

export default App;
