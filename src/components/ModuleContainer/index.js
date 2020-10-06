import React from 'react';
import { Divider } from 'antd';

import { Container, Title } from './styles';

export default function ModuleContainer({ children, title }) {
  return (
    <Container>
      <Title>
        <h1>{title}</h1>
        <Divider />
      </Title>
      {children}
    </Container>
  );
}
