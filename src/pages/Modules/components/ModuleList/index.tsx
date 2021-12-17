import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Header from "../../../../components/Header";
import { routes } from "../../../../constants/routers";
import { deleteByIdModule, getAllModules } from "../../../../services/modules";
import { Container, Flex, OptionButton, Table, Td, Th, Tr } from "./styles";

const ModulesList: React.FC = () => {
  const navigation = useNavigate();
  const [modules, setModules] = useState([]);

  const handleGetAllModules = async () => {
    try {
      const { data } = await getAllModules();
      setModules(data);
    } catch (error) {
      alert(error);
    }
  };

  const handleRedirectCreate = () => {
    navigation(`${routes.moduleInfo}/create`);
  };

  const handleRedirectUpdate = (id: number) => {
    navigation(`${routes.moduleInfo}/${id}`);
  }
  
  const handleRedirectDelete = async (id: number) => {
    const text = 'Deseja realmente deletar?';
    // eslint-disable-next-line no-restricted-globals
    if (confirm(text) === true) {
      try {
        const res = await deleteByIdModule(id);
        alert(res.data.message ?? 'Deleção realizada');
        handleGetAllModules();
      } catch (error) {
        alert(error)
      }
    }
  }

  useEffect(() => {
    handleGetAllModules();
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
          <Th>Opções</Th>
        </Tr>

        {modules?.map(({ id, name }) => (
          <Tr>
            <Td>{id}</Td>
            <Td>{name}</Td>
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

export default ModulesList;
