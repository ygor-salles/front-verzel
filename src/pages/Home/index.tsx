import React from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { Container, SubTitle, Title } from './styles';


const Home: React.FC = () => {

    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return <div >
        <Header />
        <Container>
            <Title>Módulos</Title>
            <SubTitle>Selecione o módulo para ver as aulas disponíveis:</SubTitle>

            {array?.map((card) => <Card />)}

        </Container>
    </div>;
}

export default Home;