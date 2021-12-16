import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { getAllModules } from "../../services/modules";
import { Container, SubTitle, Title, Wrapper } from "./styles";

const Home: React.FC = () => {
  const [modules, setModules] = useState([]);

  const handleGetAllModules = async () => {
    try {
      const { data } = await getAllModules();
      setModules(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    handleGetAllModules();
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <Title>Módulos</Title>
        <SubTitle>Selecione o módulo para ver as aulas disponíveis:</SubTitle>
        <Wrapper>
          {modules?.map(({ name, lessons }) => (
            <Card name={name} lessons={lessons} />
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Home;
