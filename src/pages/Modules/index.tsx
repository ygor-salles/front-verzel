import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { createModule } from "../../services/modules";
import {
  BackButton,
  Card,
  Container,
  Input,
  SubmitButton,
  Title,
} from "./styles";

const Modules: React.FC = () => {
  const [name, setName] = useState<string>("");

  const handleChangeName = useCallback(
    ({ target }) => {
      setName(target.value);
    },
    []
  );

  const handleCreate = async () => {
    try {
      const res = await createModule({ name });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Link to="/">
        <BackButton>Voltar</BackButton>
      </Link>
      <Card>
        <img
          src="https://www.devaria.com.br/static/media/logo-devaria-02.933327f5.svg"
          alt=""
          width="90%"
        />
        <Title>Criação de modulo</Title>
        <Input
          placeholder="Digite o nome do modulo"
          onChange={handleChangeName}
          value={name}
        />

        <SubmitButton onClick={handleCreate}>Criar</SubmitButton>
      </Card>
    </Container>
  );
};

export default Modules;
