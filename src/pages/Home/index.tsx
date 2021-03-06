import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { getAllModules } from "../../services/modules";
import { Container, SubTitle, Title, Wrapper, Spinner } from "./styles";

const Home: React.FC = () => {
  const [modules, setModules] = useState([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleGetAllModules = async () => {
    try {
      const { data } = await getAllModules();
      setModules(data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleToggle = (id: any) => {
    setActive(id)
  }

  useEffect(() => {
    handleGetAllModules();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Title>Módulos</Title>
        <SubTitle>Selecione o módulo para ver as aulas disponíveis:</SubTitle>
        {loading ? 
          <Wrapper>
            <Spinner />
          </Wrapper>
          : 
          <Wrapper>
            {modules?.map(({ id, name, lessons }) => (
              <Card name={name} lessons={lessons} id={id} active={active} toggle={handleToggle} />
            ))}
          </Wrapper>
        }
      </Container>
    </div>
  );
};

export default Home;
