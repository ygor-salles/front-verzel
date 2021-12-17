import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Header from "../../../../components/Header";
import { routes } from "../../../../constants/routers";
import { deleteByIdLesson, getAllLessons } from "../../../../services/lessons";
import { Container, Flex, OptionButton, Table, Td, Th, Tr } from "./styles";

const LessonsList: React.FC = () => {
  const navigation = useNavigate();
  const [lessons, setLessons] = useState([]);

  const handleGetAllLessons = async () => {
    try {
      const data = await getAllLessons();
      setLessons(data);
    } catch (error) {
      alert(error)
    }
  };

  const handleRedirectCreate = () => {
    navigation(`${routes.lessonInfo}/create`);
  };

  const handleRedirectUpdate = (id: number) => {
    navigation(`${routes.lessonInfo}/${id}`);
  }
  
  const handleRedirectDelete = async (id: number) => {
    const text = 'Deseja realmente deletar?';
    // eslint-disable-next-line no-restricted-globals
    if (confirm(text) === true) {
      try {
        const res = await deleteByIdLesson(id);
        alert(res.data.message ?? 'Deleção realizada');
        handleGetAllLessons();
      } catch (error) {
        alert(error)
      }
    }
  }

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
              <OptionButton onClick={() => handleRedirectUpdate(id)}>
                <BiEdit size={20} color="#fff" />
              </OptionButton>
              <OptionButton onClick={() => handleRedirectDelete(id)}>
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
