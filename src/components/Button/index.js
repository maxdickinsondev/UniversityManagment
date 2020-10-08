import React from 'react';

import { Container, ButtonSubmit } from './styles';

export default function Button({ onClick, children, type, ...rest }) {
  return (
    <Container {...rest}>
      <ButtonSubmit type={type} onClick={onClick}>
        {children}
      </ButtonSubmit>
    </Container>
  );
}
