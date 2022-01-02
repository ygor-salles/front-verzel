import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../constants/routers";
import { login } from "../../services/auth";
import {
  ActionButton,
  Card,
  Container,
  Input,
  SubmitButton,
  Title,
} from "./styles";

const Login: React.FC = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
    const {
      data: { token },
      error,
    } = await login({ email, password });
    localStorage.setItem("token", token);

    if (error) {
      alert("Alguma coisa de errada aconteceu.");
    }

    navigation(routes.home);

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
        <Title>Acessar minha conta</Title>
        <Input
          placeholder="Digite seu email"
          value={email}
          onChange={handleChangeEmail}
          required
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={handleChangePassword}
          required
        />
        <SubmitButton onClick={handleLogin}>Entrar</SubmitButton>

        <Link to="/register">
          <ActionButton>Não tenho conta</ActionButton>
        </Link>
      </Card>
    </Container>
  );
};

export default Login;
