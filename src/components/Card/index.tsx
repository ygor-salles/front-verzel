import { Container, Content, Icon, Title } from "./styles";

type Props = {
  name: string;
  lessons: Array<[]>;
};
const Card = ({ name, lessons }: Props) => {
  return (
    <Container>
      <Icon src="https://www.devaria.com.br/static/media/icon_classActive.392bb0db.svg" />
      <Content>
        <Title size={20}>{name}</Title>
        <Title size={18} color="#fff">
          {lessons.length} aulas
        </Title>
      </Content>
    </Container>
  );
};

export default Card;
