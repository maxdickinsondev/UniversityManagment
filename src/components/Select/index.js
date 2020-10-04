import React from 'react';

import { Container, SelectInput, Option } from './styles';

export default function Select({ dataTestId, value, onChange, title, options }) {
    return (
        <Container>
            <SelectInput
                data-testid={dataTestId}
                value={value}
                onChange={onChange}
            >
                <Option value="" disabled hidden >{title}</Option>

                {options.map(option => {
                    return <Option key={option.value} value={option.value}>{option.label}</Option>
                })}
            </SelectInput>
        </Container>
    );
}