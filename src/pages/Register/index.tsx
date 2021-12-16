import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../services/auth";
import { ActionButton } from "../Login/styles";
import { Card, Container, Input, SubmitButton, Title } from "./styles";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeName = useCallback(
    ({ target }) => {
      setName(target.value);
    },
    []
  );

  const handleChangeEmail = useCallback(
    ({ target }) => {
      setEmail(target.value);
    },
    []
  );

  const handleChangePassword = useCallback(
    ({ target }) => {
      setPassword(target.value);
    },
    []
  );

  const handleLogin = async () => {
    console.log(name, email, password);
    const { data, error } = await createUser({ name, email, password });
    console.log(error);
    if (error) {
      alert("Usuario ja existe.");
    }

    try {
    } catch (error) {
      alert("Erro na request de criação de usuário.");
    }
  };

  return (
    <Container>
      <Card>
        <img
          src="https://www.devaria.com.br/static/media/logo-devaria-02.933327f5.svg"
          alt=""
          width="90%"
        />
        <Title>Criação de usuário</Title>
        <Input
          placeholder="Digite seu nome"
          required
          value={name}
          onChange={handleChangeName}
        />
        <Input
          placeholder="Digite seu email"
          required
          type="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <Input
          type="password"
          placeholder="Repita sua senha"
          required
          value={password}
          onChange={handleChangePassword}
        />
        <SubmitButton onClick={handleLogin}>Entrar</SubmitButton>
        <Link to="/">
          <ActionButton>Ir para o ínicio</ActionButton>
        </Link>
      </Card>
    </Container>
  );
};

export default Register;
