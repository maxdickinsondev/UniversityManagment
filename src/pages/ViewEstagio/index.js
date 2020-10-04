import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

import {
    Container, Title, TypeArea, NameArea,
    MatriculaArea, EmailArea, Row, Type,
    Email, Matricula, Nome, Button
} from './styles';

export default function Estagio() {
    const history = useHistory();

    const [data, setData] = useState({});

    useEffect(() => {
        const localData = localStorage.getItem('createInternship');
        const data = JSON.parse(localData);

        setData(data);
    }, []);

    function handleDeleteRequestEstagio(data) {
        if (data.matricula != '404513')
            toast.error('Não é possível excluir a solicitação de estágio de outro aluno!');

        setData('');
        localStorage.clear();
        toast.success('Solicitação de estágio cancelada com sucesso!');

        history.push('/');
    }

    return (
        <Container>
            <TypeArea>
                <Title>Nível de estágio</Title>

                <Type> {data.type} </Type>

                <Row>
                    <NameArea>
                        <Title>Nome</Title>

                        <Nome> {data.name} </Nome>
                    </NameArea>

                    <MatriculaArea>
                        <Title>Matrícula</Title>

                        <Matricula> {data.matricula} </Matricula>
                    </MatriculaArea>
                </Row>

                <EmailArea>
                    <Title>E-mail</Title>

                    <Email> {data.email} </Email>
                </EmailArea>
            </TypeArea>

            <Button onClick={() => handleDeleteRequestEstagio(data)}>
                <MdDelete color="#7159c1" size={25} />
            </Button>
        </Container >
    )
}