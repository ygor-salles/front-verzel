import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { routes } from "../../constants/routers";
import { Module } from "../../models/Module";
import { createLesson, editByIdLesson, getByIdLesson } from "../../services/lessons";
import { getAllModules } from "../../services/modules";
import {
  BackButton,
  Card,
  Container,
  Input, Option, Select,
  SubmitButton, TextArea, Title
} from "./styles";

const Modules: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [date_lesson, setDateLesson] = useState<string>("");
  const [module_id, setModuleId] = useState<number>(0);
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [allModules, setAllModules] = useState<Module[]>([]);

  const { id } = useParams();

  const navigation = useNavigate();

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

  const handleCreate = async () => {
    const ano = +(date_lesson.split('-')[0])
    const mes = +(date_lesson.split('-')[1])
    const dia =  +(date_lesson.split('-')[2])
    const dateFormat = new Date(ano, mes, dia)
    try {
      const res = await createLesson({ 
        name, 
        date_lesson: dateFormat, 
        module_id: +module_id, 
        link, 
        description 
      });
      alert(res.data.message ?? 'Aula criada');
      navigation(routes.lessons)
    } catch (error) {
      alert(error);
    }
  };

  const handleUpdate = async () => {

    if (id && id !== 'create') {
      const ano = +(date_lesson.split('-')[0])
      const mes = +(date_lesson.split('-')[1])
      const dia =  +(date_lesson.split('-')[2])
      const dateFormat = new Date(ano, mes, dia)
      try {
        const res = await editByIdLesson({ 
          id: +id, 
          name,
          date_lesson: dateFormat,
          module_id: +module_id,
          link,
          description 
        });
        alert(res.data.message ?? 'Atualiza????o relizada')
        navigation(routes.lessons)
      } catch (error) { 
        alert(error)
      }
    }
  }

  const getLessonById = async (id: number) => {
    try {
      const { data: { name, date_lesson, module_id, link, description } } = await getByIdLesson(id);
      setName(name)
      setDateLesson(date_lesson.split('T')[0])
      setModuleId(module_id)
      setLink(link)
      setDescription(description) 
    } catch (error) {
      alert(error)
    }
  }

  const handleGetAllModules = async () => {
    try {
      const { data } = await getAllModules();
      setAllModules(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (id && id !== 'create'){
      getLessonById(+id);
    }
    handleGetAllModules();
  }, [id]);

  return (
    <Container>
      <Link to="/lessons">
        <BackButton>Voltar</BackButton>
      </Link>
      <Card>
        <img
          src="https://www.devaria.com.br/static/media/logo-devaria-02.933327f5.svg"
          alt=""
          width="90%"
        />
        <Title>{ id === 'create' ? 'Cria????o de aula' : 'Edi????o de aula' }</Title>
        <Input
          placeholder="Digite o nome da aula"
          onChange={handleChangeName}
          value={name}
        />
        <Input
            type={"date"} 
            placeholder="Informe a data da aula"
            onChange={handleChageDateLesson} 
            value={date_lesson}
        />
        <Select
            onChange={handleChangeModuleId}
            value={module_id}
            disabled={allModules.length === 0}
        >
            <Option value="0">Selecionar um m??dulo</Option>

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
          placeholder="Digite a descri????o"
          onChange={handleChangeDescription}
          value={description}
        />

        <SubmitButton onClick={id === 'create' ? handleCreate : handleUpdate}>
          {id === 'create' ? 'Criar' : 'Editar'}
        </SubmitButton>
      </Card>
    </Container>
  );
};

export default Modules;
