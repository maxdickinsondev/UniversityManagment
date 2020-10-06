import React from 'react';

import { Container, ButtonSubmit } from './styles';

export default function Button({ onClick, children, type }) {
  return (
    <Container>
      <ButtonSubmit type={type} onClick={onClick}>
        {children}
      </ButtonSubmit>
    </Container>
  );
}
