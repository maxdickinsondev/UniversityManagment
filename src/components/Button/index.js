import React from 'react';

import { Container, ButtonSubmit } from './styles';

export default function Button({ onClick, children }) {
    return (
        <Container>
            <ButtonSubmit
                onClick={onClick}
            >
                {children}
            </ButtonSubmit>
        </Container>
    );
}