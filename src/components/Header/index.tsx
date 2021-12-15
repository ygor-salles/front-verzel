import React from "react";
import { Link } from "react-router-dom";
import { Container, SignInButton } from "./styles";

const Header: React.FC = () => {
  const handleRedirect = () => {};
  return (
    <Container>
      <a href="">
        <img
          src="https://www.devaria.com.br/static/media/logo-devaria-02.933327f5.svg"
          alt=""
        />
      </a>
      <Link to="/login">
        <SignInButton>Entrar</SignInButton>
      </Link>
    </Container>
  );
};

export default Header;
