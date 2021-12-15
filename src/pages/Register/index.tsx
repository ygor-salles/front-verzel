import React from "react";
import { Link } from "react-router-dom";
import { ActionButton } from "../Login/styles";
import { Card, Container, Input, SubmitButton, Title } from "./styles";

const Register: React.FC = () => {
  return (
    <Container>
      <Card>
        <img
          src="https://www.devaria.com.br/static/media/logo-devaria-02.933327f5.svg"
          alt=""
          width="90%"
        />
        <Title>Criação de usuário</Title>
        <Input placeholder="Digite seu email" />
        <Input type="password" placeholder="Digite sua senha" />
        <Input type="password" placeholder="Repita sua senha" />
        <SubmitButton>Entrar</SubmitButton>
        <Link to="/">
          <ActionButton>Ir para o ínicio</ActionButton>
        </Link>
      </Card>
    </Container>
  );
};

export default Register;
