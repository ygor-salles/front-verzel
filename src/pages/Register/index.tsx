import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../constants/routers";
import { createUser } from "../../services/auth";
import { ActionButton } from "../Login/styles";
import { Card, Container, Input, SubmitButton, Title } from "./styles";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigate();

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
    try {
      const { data, error, status } = await createUser({ name, email, password });
      alert(data.message ?? 'Usuário criado')
      if(status===201) navigation('/login')
    } catch (error) {
      alert(error);
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
        <SubmitButton onClick={handleLogin}>Cadastrar</SubmitButton>
        <Link to="/">
          <ActionButton>Ir para o ínicio</ActionButton>
        </Link>
      </Card>
    </Container>
  );
};

export default Register;
