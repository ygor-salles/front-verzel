import React from "react";
import { Container, SignInButton } from './styles';


const Header: React.FC = () => {
    return <Container>
        <a href="">
            <img src="https://www.devaria.com.br/static/media/logo-devaria-02.933327f5.svg" alt="" />
        </a>
        <SignInButton>Entrar</SignInButton>

    </Container>;
};

export default Header;
