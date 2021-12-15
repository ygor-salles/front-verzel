import React from "react";
import { Container, Content, Icon, Title } from "./styles";

const Card: React.FC = () => {
  return (
    <Container>
      <Icon src="https://www.devaria.com.br/static/media/icon_classActive.392bb0db.svg" />
      <Content>
        <Title size={20}>Conceito de Sitemas</Title>
        <Title size={18} color="#fff">
          9/9 aulas
        </Title>
      </Content>
    </Container>
  );
};

export default Card;
