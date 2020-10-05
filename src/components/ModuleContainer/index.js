import React from "react";
import { Container, Title } from "./styles";

export default function ModuleContainer({ children, title }) {
  return (
    <Container>
      <Title>
        <h1>{title}</h1>
      </Title>
      {children}
    </Container>
  );
}
