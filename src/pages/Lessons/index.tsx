import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Module } from "../../models/Module";
import { createModule, getAllModules } from "../../services/modules";
import {
  BackButton,
  Card,
  Container,
  Input,
  Select,
  SubmitButton,
  Title,
  Option,
  TextArea
} from "./styles";

const Modules: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [date_lesson, setDateLesson] = useState<string>("");
  const [module_id, setModuleId] = useState<number>(0);
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [allModules, setAllModules] = useState<Module[]>([]);

  const handleChangeName = useCallback(
    ({ target }) => {
      setName(target.value);
    },
    []
  );
  
  const handleChageDateLesson = useCallback(
    ({ target }) => {
      setDateLesson(target.value);
    },
    []
  );
  
  const handleChangeModuleId = useCallback(
    ({ target }) => {
      setModuleId(target.value);
    },
    []
  );
  
  const handleChangeLink = useCallback(
    ({ target }) => {
      setLink(target.value);
    },
    []
  );
  
  const handleChangeDescription = useCallback(
    ({ target }) => {
      setDescription(target.value);
    },
    []
  );

  const handleGetAllModules = async () => {
    try {
      const { data } = await getAllModules();
      console.log(data)
      setAllModules(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
      handleGetAllModules();
  }, []);

  const handleCreate = async () => {
    console.log(name)
    console.log(date_lesson)
    console.log(module_id)
    console.log(link)
    console.log(description)
    // try {
    //   const res = await createModule({ name });
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
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
          placeholder="Digite o nome da aula"
          onChange={handleChangeName}
          value={name}
        />
        <input 
          type="date"
          placeholder="Digite a data da aula"
          onChange={handleChageDateLesson} 
          value={date_lesson} 
        />
        <Select
            onChange={handleChangeModuleId}
            value={module_id}
            disabled={allModules.length === 0}
        >
            <Option value="0">Selecionar um módulo</Option>

            {allModules && allModules?.map((module) => (
                <Option key={module.id} value={module?.id?.toString()}>
                    {module.name}
                </Option>
            ))}
        </Select>
        <Input
          placeholder="Cole o link"
          onChange={handleChangeLink}
          value={link}
        />
        <TextArea
          placeholder="Digite a descrição"
          onChange={handleChangeDescription}
          value={description}
        />

        <SubmitButton onClick={handleCreate}>Criar</SubmitButton>
      </Card>
    </Container>
  );
};

export default Modules;
