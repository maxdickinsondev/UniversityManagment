import React from 'react';

import { Container, TextInput } from './styles';

export default function Input({ placeholder, onChange, ...rest }) {
    return (
        <Container>
            <TextInput {...rest}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Container>
    );
}