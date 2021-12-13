import React from 'react';
import { Container, Content, Icon, Progress, Title } from './styles';


const Card: React.FC = () => {
    return <Container >
        <Icon />
        <Content>
            <Title>Conceito de Sitemas</Title>
        </Content>
        <Progress></Progress>
    </Container>;
}

export default Card;