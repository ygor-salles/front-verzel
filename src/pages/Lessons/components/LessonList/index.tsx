import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Header from "../../../../components/Header";
import { routes } from "../../../../constants/routers";
import { Lesson } from "../../../../models/Lesson";
import { getAllLessons } from "../../../../services/lessons";
import { Container, Flex, OptionButton, Table, Td, Th, Tr } from "./styles";

const LessonsList: React.FC = () => {
  const navigation = useNavigate();
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const handleGetAllLessons = async () => {
    try {
      const data = await getAllLessons();
      console.log('Data', data)
      setLessons(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleRedirectCreate = () => {
    navigation(routes.moduleInfo);
  };

  useEffect(() => {
    handleGetAllLessons();
  }, []);

  return (
    <Container>
      <Header />
      <Flex>
        <button onClick={handleRedirectCreate}>Criar</button>
      </Flex>
      <Table>
        <Tr>
          <Th>ID</Th>
          <Th>Nome</Th>
          <Th>Data da aula</Th>
          <Th>Link</Th>
          <Th>Opções</Th>
        </Tr>

        {lessons?.map(({ id, name, date_lesson, link }) => (
          <Tr>
            <Td>{id}</Td>
            <Td>{name}</Td>
            <Td>{date_lesson}</Td>
            <Td>{link}</Td>
            <Td>
              <OptionButton>
                <BiEdit size={20} color="#fff" />
              </OptionButton>
              <OptionButton>
                <MdDeleteOutline size={22} color="#fff" />
              </OptionButton>
            </Td>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default LessonsList;
