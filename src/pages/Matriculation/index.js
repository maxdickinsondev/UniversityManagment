import React, { useState, useEffect } from 'react';

import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  Table,
  Divider,
  notification,
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import ModuleContainer from '../../components/ModuleContainer';

const { Item } = Form;
const { Option } = Select;

function Matriculation() {
  const [discipline, setDiscipline] = useState(null);
  const [disciplinesMatriculated, setDisciplinesMatriculated] = useState(null);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('disciplines'));
    if (storage) {
      setDisciplinesMatriculated(storage);
    }
  }, []);

  const student = 'Keven Max';
  const disciplines = [
    'Análise de projetos',
    'Programação orientada à objetos',
    'Estrutura de dados',
    'Qualidade de software',
    'Projeto e análise de algoritmos',
    'Arquitetura de Software',
    'Introdução a engenharia de software',
    'Verificação e validação',
    'Fundamentos de programação',
    'Interação humano computador',
    'Requisitos de software',
    'Padrões de projeto de software',
    'Introdução a processos e requisitos de software',
  ];
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'student',
      key: 'studant',
    },
    {
      title: 'Disciplina',
      dataIndex: 'discipline',
      key: 'discipline',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Remover',
      key: 'remove',
      render: record => (
        <Button onClick={() => removeMatriculation(record)}>
          <DeleteOutlined style={{ color: '#eb2f96', textAlign: 'right' }} />
        </Button>
      ),
    },
  ];

  const removeMatriculation = matriculation => {
    const existMatriculation = disciplinesMatriculated.filter(value => {
      return value.discipline === matriculation.discipline;
    });
    let newDisciplinesMatriculated = [];

    if (existMatriculation.length > 0) {
      if (disciplinesMatriculated.length > 1) {
        newDisciplinesMatriculated = disciplinesMatriculated.filter(value => {
          if (matriculation.discipline !== value.discipline) {
            return value;
          }
        });
        console.log(newDisciplinesMatriculated);
      }
      setDisciplinesMatriculated(newDisciplinesMatriculated);
      localStorage.setItem(
        'disciplines',
        JSON.stringify(newDisciplinesMatriculated),
      );
    }
  };

  const handleSubmit = () => {
    const storage = JSON.parse(localStorage.getItem('disciplines'));

    if (storage) {
      const filterData = storage.filter(value => {
        return value.discipline === discipline;
      });

      if (filterData.length < 1) {
        const data = [
          ...storage,
          {
            key: Math.floor(Math.random() * 100),
            student,
            discipline,
            status: 'Pendente',
          },
        ];
        localStorage.setItem('disciplines', JSON.stringify(data));
        setDisciplinesMatriculated(data);

        notification.success({
          message: 'Solicitação realizada com sucesso!',
          placement: 'bottomLeft',
        });

        return;
      }

      notification.error({
        message: 'Solicitação para disciplina já realizada',
        placement: 'bottomLeft',
      });
    } else {
      const data = [
        {
          key: Math.floor(Math.random() * 100),
          student,
          discipline,
          status: 'Pendente',
        },
      ];
      localStorage.setItem('disciplines', JSON.stringify(data));
      setDisciplinesMatriculated(data);

      notification.success({
        message: 'Solicitação realizada com sucesso!',
        placement: 'bottomLeft',
      });
    }

    return;
  };

  return (
    <ModuleContainer title="Solicitar Matricula">
      <Row>
        <Col span={24}>
          <Form
            name="matriculation"
            initialValues={{ student }}
            layout="inline"
            onFinish={handleSubmit}
          >
            <Col span={12}>
              <Item name="student" label="Aluno">
                <Input disabled />
              </Item>
            </Col>

            <Col span={12}>
              <Item name="disciplines" label="Disciplinas" required>
                <Select
                  showSearch
                  optionFilterProp="children"
                  onChange={(value, option) => setDiscipline(option.label)}
                >
                  {disciplines.map((discipline, index) => (
                    <Option key={index} label={discipline}>
                      {discipline}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
            <br />
            <br />
            <Col span={4} offset={21}>
              <Item>
                <Button htmlType="submit">Solicitar Matricula</Button>
              </Item>
            </Col>
          </Form>
        </Col>
      </Row>

      <Divider style={{ marginTop: 45 }} />

      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={disciplinesMatriculated}
            pagination={false}
          />
        </Col>
      </Row>
    </ModuleContainer>
  );
}

export default Matriculation;
