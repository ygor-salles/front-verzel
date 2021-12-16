import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createModule, editByIdModule, getByIdModule } from "../../services/modules";
import {
  BackButton,
  Card,
  Container,
  Input,
  SubmitButton,
  Title,
} from "./styles";
import { routes } from "../../constants/routers";

const Modules: React.FC = () => {
  const [name, setName] = useState<string>("");

  const { id } = useParams();

  const navigation = useNavigate();

  const handleChangeName = useCallback(
    ({ target }) => {
      setName(target.value);
    },
    []
  );

  const handleCreate = async () => {
    try {
      const res = await createModule({ name });
      alert(res.data.message ?? 'Módulo criado');
      navigation(routes.modules)
    } catch (error) {
      alert(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await editByIdModule({ id, name });
      alert(res.data.message ?? 'Atualização relizada')
      navigation(routes.modules)
    } catch (error) { 
      alert(error)
    }
  }

  const getModuleById = async (id: number) => {
    try {
      const { data: { name } } = await getByIdModule(id);
      setName(name) 
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    if (id && id !== 'create')
      getModuleById(+id)
  }, [id])

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
        <Title>{ id === 'create' ? 'Criação de módulo' : 'Edição de módulo' }</Title>
        <Input
          placeholder="Digite o nome do modulo"
          onChange={handleChangeName}
          value={name}
        />

        <SubmitButton onClick={id === 'create' ? handleCreate : handleUpdate}>
          {id === 'create' ? 'Criar' : 'Editar'}
        </SubmitButton>
      </Card>
    </Container>
  );
};

export default Modules;
