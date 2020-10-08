import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FiX } from 'react-icons/fi';

import ModuleContainer from '../../components/ModuleContainer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Table, Modal, ModalContainer, Title, Form } from './styles';
import Select from '../../components/Select';

const categoriesData = [
  {
    id: 1,
    name: 'Atividades de iniciação à docência',
  },
  {
    id: 2,
    name: 'Atividades de iniciação à pesquisa',
  },
  {
    id: 3,
    name: 'Atividades artístico-culturais e esportivas',
  },
  {
    id: 4,
    name: 'Atividades de participação e/ou organização de eventos',
  },
  {
    id: 5,
    name: 'Experiências ligadas à formação profissional e/ou correlatas',
  },
  {
    id: 6,
    name: 'Produção Técnica e/ou Científica',
  },
  {
    id: 7,
    name: 'Vivências de gestão',
  },
];

const activitiesSentData = [];

export default function ComplementaryHours() {
  const [category, setCategory] = useState('');
  const [hours, setHours] = useState(0);
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [fileC, setFileC] = useState('');

  const [count, setCount] = useState(3);

  const [activities, setActivities] = useState([]);
  const [showModalAddActivity, setShowModalAddActivity] = useState(false);

  function handlerDeleterActivity(key) {
    const newActivities = activities.filter(activity => activity.id !== key);
    setActivities(newActivities);

    toast.success('Atividade removida com sucesso!');
  }

  function handlerAddActivity() {
    setShowModalAddActivity(!showModalAddActivity);
  }

  function handlerSaveActivity(e) {
    e.preventDefault();

    console.log(fileC);

    // check null inputs
    if (!category || !hours || !dateStart || !dateEnd) {
      toast.info('Todas as entradas são obrigatórias!');
      return;
    }

    // check start date and end date
    const [yearStart, monthStart, dayStart] = dateStart.split('-');
    const [yearEnd, monthEnd, dayEnd] = dateEnd.split('-');
    const dateStartTransform = new Date(yearStart, monthStart - 1, dayStart);
    const dateEndTransform = new Date(yearEnd, monthEnd - 1, dayEnd);

    if (dateStartTransform.getTime() > dateEndTransform.getTime()) {
      toast.error(
        'Datas inválidas. Data de início deve ser menor que a data de término',
      );
      return;
    }

    //check hours
    if (isNaN(hours) || !(parseFloat(hours) % 1 === 0) || hours <= 0) {
      toast.error(
        'Horas da atividade inválida. A quantidade de horas deve ser positivo e inteiro',
      );
      return;
    }

    //check category
    const findCategory = categoriesData.find(cat => cat.name === category);
    if (!findCategory) {
      toast.error('A categoria informada é inválida');
      return;
    }

    //check file comprovant
    if (fileC.size > 5000000) {
      toast.error('O tamanho do arquvio deve ser no máximo 5Mb.');
      return;
    }
    if (fileC.type !== 'application/pdf') {
      toast.error('O formato do arquvio deve ser em .pdf');
      return;
    }

    const act = {
      id: count,
      categoria: category,
      dataInicio: dateStart,
      dataFim: dateEnd,
      horas: hours,
      anexo: fileC.name,
    };

    const last = activities;
    last.push(act);

    setActivities(last);

    setCount(count + 1);

    handlerAddActivity();

    setHours(0);
    setDateStart('');
    setDateEnd('');
    setCategory('');
  }

  function handleSendSolicitation() {
    //ceck empty list
    if (activities.length === 0) {
      toast.error('Lista de atividades vazia, crie ao menos uma atividade');
      return;
    }

    activitiesSentData.push(activities);
    setActivities([]);
    console.log(activitiesSentData);

    toast.success('Solicitações de horas complementares enviada com sucesso');
  }

  return (
    <>
      <ModuleContainer title="Modulo de Horas Complementares">
        <Container>
          <Button
            style={{ alignSelf: 'flex-start' }}
            onClick={() => handlerAddActivity()}
          >
            Adicionar
          </Button>
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
          <div style={{ alignSelf: 'flex-end', marginTop: 'auto' }}>
            <Button onClick={() => handleSendSolicitation()}>
              Enviar Solicitação
            </Button>
          </div>
        </Container>
      </ModuleContainer>

      <Modal show={showModalAddActivity}>
        <ModalContainer>
          <a onClick={() => handlerAddActivity()}>
            <FiX size={30} />
          </a>
          <Form onSubmit={e => handlerSaveActivity(e)}>
            <Title>Categoria:</Title>
            <Select
              value={category}
              onChange={e => setCategory(e.target.value)}
              title="Selecione uma categoria"
              options={categoriesData.map(category => {
                return { value: category.name, label: category.name };
              })}
            />
            <Title>Quantidade de horas:</Title>
            <Input
              type="number"
              value={hours}
              placeholder="Ex: 64"
              onChange={e => setHours(e.target.value)}
            />
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
            <Input
              type="file"
              accept=".pdf"
              onChange={e => setFileC(e.target.files[0])}
            />

            <Button style={{ alignSelf: 'flex-end' }} type="submit">
              Salvar
            </Button>
          </Form>
        </ModalContainer>
      </Modal>
    </>
  );
}
