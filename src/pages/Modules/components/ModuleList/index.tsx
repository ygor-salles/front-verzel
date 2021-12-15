import React from "react";
import Header from "../../../../components/Header";
import { Container, OptionButton, Table, Td, Th, Tr } from "./styles";

const ModulesList: React.FC = () => {
  return (
    <Container>
      <Header />
      <Table>
        <Tr>
          <Th>ID</Th>
          <Th>Nome</Th>
          <Th>Opções</Th>
        </Tr>
        <Tr>
          <Td>Alfreds Futterkiste</Td>
          <Td>Maria Anders</Td>
          <Td>
            <OptionButton>E</OptionButton>
            <OptionButton>D</OptionButton>
          </Td>
        </Tr>
        <Tr>
          <Td>Berglunds snabbköp</Td>
          <Td>Christina Berglund</Td>
          <Td>
            <OptionButton>E</OptionButton>
            <OptionButton>D</OptionButton>
          </Td>
        </Tr>
        <Tr>
          <Td>CenTro comercial Moctezuma</Td>
          <Td>Francisco Chang</Td>
          <Td>
            <OptionButton>E</OptionButton>
            <OptionButton>D</OptionButton>
          </Td>
        </Tr>
        <Tr>
          <Td>Ernst Handel</Td>
          <Td>Roland Mendel</Td>
          <Td>
            <OptionButton>E</OptionButton>
            <OptionButton>D</OptionButton>
          </Td>
        </Tr>
        <Tr>
          <Td>Island Trading</Td>
          <Td>Helen Bennett</Td>
          <Td>
            <OptionButton>E</OptionButton>
            <OptionButton>D</OptionButton>
          </Td>
        </Tr>
      </Table>
    </Container>
  );
};

export default ModulesList;
