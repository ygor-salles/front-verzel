import React from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Container, SubTitle, Title, Wrapper } from "./styles";

const Home: React.FC = () => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div>
      <Header />
      <Container>
        <Title>Módulos</Title>
        <SubTitle>Selecione o módulo para ver as aulas disponíveis:</SubTitle>
        <Wrapper>
          {array?.map((card) => (
            <Card />
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Home;
