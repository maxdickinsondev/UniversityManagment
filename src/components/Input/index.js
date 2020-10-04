import React from 'react';

import { Container, TextInput } from './styles';

export default function Input({ placeholder, onChange }) {
    return (
        <Container>
            <TextInput 
                placeholder={placeholder}
                onChange={onChange}
            />
        </Container>
    );
}