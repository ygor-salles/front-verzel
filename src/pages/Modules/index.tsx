import React from "react";
import { Card, Container, Input, SubmitButton, Title } from "./styles";

const Modules: React.FC = () => {
  return (
    <Container>
      <Card>
        <img
          src="https://www.devaria.com.br/static/media/logo-devaria-02.933327f5.svg"
          alt=""
          width="90%"
        />
        <Title>Criação de modulo</Title>
        <Input placeholder="Digite seu email" />

        <SubmitButton>Criar</SubmitButton>
      </Card>
    </Container>
  );
};

export default Modules;
