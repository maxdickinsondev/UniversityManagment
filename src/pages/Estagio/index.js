import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import ButtonSubmit from '../../components/Button';
import Select from '../../components/Select';

import {
    Container, Title, TypeArea, Form, NameArea,
    MatriculaArea, EmailArea, Row
} from './styles';

export default function Estagio() {
    const history = useHistory();

    const [estagio, setEstagio] = useState('');
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const [internship, setInternship] = useState([]);

    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        const localData = localStorage.getItem('createInternship');
        const dat = JSON.parse(localData);

        if (dat) {
            history.push('/viewestagio');
        }
    }, []);

    function handleSelectedEstagio(event) {
        setEstagio(event.target.value);
        setIsSelected(true);
    }

    function handleRequestNewInternship(event) {
        event.preventDefault();

        if (matricula != '404513') {
            toast.error('Matrícula incorreta, tente novamente!');
            return;
        }            

        const data = {
            id: '1',
            type: estagio,
            name: nome,
            email: email,
            matricula: matricula,
            status: 'pending'
        };

        setInternship(data);
        localStorage.setItem('createInternship', JSON.stringify(data));

        toast.success('Solicitação realizada com sucesso!');

        setInterval(() => {
            history.push('/viewestagio');
        }, 3000);
    }

    return (
        <Container>
            <TypeArea>
                <Title>Nível de estágio</Title>

                <Select
                    dataTestId="select-field"
                    value={estagio}
                    onChange={handleSelectedEstagio}
                    title="Selecione uma opção"
                    options={[
                        { value: 'Estágio I', label: 'Estágio I' },
                        { value: 'Estágio II', label: 'Estágio II' },
                    ]}
                />
            </TypeArea>

            {isSelected && (
                <>
                    <Form
                        data-testid="form-field"
                        onSubmit={handleRequestNewInternship}
                    >
                        <Row>
                            <NameArea>
                                <Title>Nome</Title>

                                <Input
                                    value={nome}
                                    placeholder="Informe seu nome"
                                    onChange={(event) => setNome(event.target.value)}
                                />
                            </NameArea>

                            <MatriculaArea>
                                <Title>Matrícula</Title>

                                <Input
                                    value={matricula}
                                    placeholder="Informe sua matrícula"
                                    onChange={(event) => setMatricula(event.target.value)}
                                />
                            </MatriculaArea>
                        </Row>

                        <EmailArea>
                            <Title>E-mail</Title>

                            <Input
                                value={email}
                                placeholder="Informe seu e-mail"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </EmailArea>

                        <ButtonSubmit
                            type="submit"
                        >
                            Solicitar
                        </ButtonSubmit>
                    </Form>
                </>
            )}
        </Container>
    )
}