import { useState } from "react";
import { Lesson } from "../../models/Lesson";
import { Container, Content, Icon, Title } from "./styles";

type Props = {
  name: string;
  lessons: Lesson[];
  id: number;
  active: number;
  toggle: (value: any) => void;
};
const Card = ({ id, name, lessons, active, toggle }: Props) => {

  console.log(active, id)

  return (
    <Container active={active === id} onClick={() => toggle(id)}>
      <Icon src="https://www.devaria.com.br/static/media/icon_classActive.392bb0db.svg" />
      <Content>
        <Title size={20}>{name}</Title>
        <Title size={18} color="#fff">
          {lessons.length} aulas
        </Title>

        {active === id && lessons?.map((lesson) => (
          <p style={{color: "#fff", paddingTop: "10px", paddingBottom: "5px"}}>{lesson.name}</p>
        ))}
      </Content>
    </Container>
  );
};

export default Card;
