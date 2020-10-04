import React, { useState } from 'react';

import Input from '../../components/Input';
import ButtonSubmit from '../../components/Button';
import Select from '../../components/Select';

import { Container, Title, TypeArea, Form, NameArea, MatriculaArea, EmailArea, Row } from './styles';

export default function Estagio() {
    const [estagio, setEstagio] = useState('');
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const [isSelected, setIsSelected] = useState(false);

    function handleSelectedEstagio(event) {
        setEstagio(event.target.value);
        setIsSelected(true);
    }

    console.log(estagio);

    return (
        <Container>
            <TypeArea>
                <Title>Nível de estágio</Title>

                <Select
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
                    <Form>
                        <Row>
                            <NameArea>
                                <Title>Nome</Title>

                                <Input
                                    placeholder="Infome seu nome"
                                    onChange={(event) => setNome(event.target.value)}
                                />
                            </NameArea>

                            <MatriculaArea>
                                <Title>Matrícula</Title>

                                <Input
                                    placeholder="Infome sua matrícula"
                                    onChange={(event) => setMatricula(event.target.value)}
                                />
                            </MatriculaArea>
                        </Row>

                        <EmailArea>
                            <Title>E-mail</Title>

                            <Input
                                placeholder="Infome seu e-mail"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </EmailArea>


                    </Form>

                    <ButtonSubmit
                        onClick={() => { }}
                    >
                        Solicitar
                    </ButtonSubmit>
                </>
            )}
        </Container>
    )
}