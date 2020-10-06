import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

import Button from '../../components/Button';
import ModuleContainer from '../../components/ModuleContainer';
import Input from '../../components/Input';

import { Container, Table, Modal, ModalContainer, Title } from './styles';
import Select from '../../components/Select';

const dataActivities = [
  // {
  //   id: 1,
  //   categoria: "A",
  //   dataInicio: "05/10/2020",
  //   dataFim: "05/10/2022",
  //   horas: 64,
  //   anexo: "x/x/y/g.pdf",
  // },
  // {
  //   id: 2,
  //   categoria: "B",
  //   dataInicio: "02/09/2020",
  //   dataFim: "06/12/2021",
  //   horas: 32,
  //   anexo: "x/x/y/g.pdf",
  // },
];

export default function ComplementaryHours() {
  const [category, setCategory] = useState('');
  const [hours, setHours] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  const [count, setCount] = useState(3);

  const [activities, setActivities] = useState(dataActivities);
  const [showModalAddActivity, setShowModalAddActivity] = useState(false);

  function handlerDeleterActivity(key) {
    const newActivities = activities.filter(activity => activity.id !== key);

    setActivities(newActivities);
  }

  function handlerAddActivity() {
    setShowModalAddActivity(!showModalAddActivity);
  }

  function handlerSaveActivity(e) {
    e.preventDefault();
    const act = {
      id: count,
      categoria: category,
      dataInicio: dateStart,
      dataFim: dateEnd,
      horas: hours,
      anexo: 'x/x/y/teste.pdf',
    };

    const last = activities;
    last.push(act);

    setActivities(last);

    setCount(count + 1);

    handlerAddActivity();

    setHours('');
    setDateStart('');
    setDateEnd('');
    setCategory('');
  }

  return (
    <ModuleContainer title="Modulo de Horas Complementares">
      <Container>
        <Button onClick={() => handlerAddActivity()}>Adicionar</Button>

        {activities.length !== 0 ? (
          <Table>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Data de Inicio</th>
                <th>Data de Fim</th>
                <th>Horas</th>
                <th>Anexo</th>
                <th>Operação</th>
              </tr>
            </thead>

            <tbody>
              {activities.map(activity => {
                return (
                  <tr key={activity.id}>
                    <td>{activity.categoria}</td>
                    <td>{activity.dataInicio}</td>
                    <td>{activity.dataFim}</td>
                    <td>{activity.horas}h</td>
                    <td>{activity.anexo}</td>
                    <td>
                      <a
                        href="#delete"
                        onClick={() => handlerDeleterActivity(activity.id)}
                      >
                        Deletar
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <h1>Lista Vazia</h1>
        )}
        <Button>Enviar Solicitação</Button>

        <Modal show={showModalAddActivity}>
          <ModalContainer>
            <a onClick={() => handlerAddActivity()}>
              <FiX size={30} />
            </a>
            <form action="">
              <Title>Categoria:</Title>
              <Select
                value={category}
                onChange={e => setCategory(e.target.value)}
                title="Selecione uma categoria"
                options={[
                  {
                    value: 'Atividades de iniciação à docência',
                    label: 'Atividades de iniciação à docência',
                  },
                  {
                    value: 'Atividades de iniciação à pesquisa',
                    label: 'Atividades de iniciação à pesquisa',
                  },
                  {
                    value: 'Atividades artístico-culturais e esportivas',
                    label: 'Atividades artístico-culturais e esportivas',
                  },
                  {
                    value:
                      'Atividades de participação e/ou organização de eventos',
                    label:
                      'Atividades de participação e/ou organização de eventos',
                  },
                  {
                    value:
                      'Experiências ligadas à formação profissional e/ou correlatas',
                    label:
                      'Experiências ligadas à formação profissional e/ou correlatas',
                  },
                  {
                    value: 'Produção Técnica e/ou Científica',
                    label: 'Produção Técnica e/ou Científica',
                  },
                  {
                    value: 'Vivências de gestão',
                    label: 'Vivências de gestão',
                  },
                ]}
              />
              <Title>Quantidade de horas:</Title>
              <Input
                type="number"
                value={hours}
                placeholder="Ex: 64"
                onChange={e => setHours(e.target.value)}
              />
              <div>
                <Title>Data de inicio:</Title>
                <Input
                  type="date"
                  value={dateStart}
                  placeholder="Ex: 02/02/2020"
                  onChange={e => setDateStart(e.target.value)}
                />
                <Title>Data do fim:</Title>
                <Input
                  type="date"
                  value={dateEnd}
                  placeholder="Ex: 03/06/2021"
                  onChange={e => setDateEnd(e.target.value)}
                />
                <Title>Comprovante (.pdf):</Title>
                <Input type="file" accept=".pdf" />
              </div>

              <Button onClick={e => handlerSaveActivity(e)}>Salvar</Button>
            </form>
          </ModalContainer>
        </Modal>
      </Container>
    </ModuleContainer>
  );
}
