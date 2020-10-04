import React from 'react';
import { render, fireEvent, act, waitForElement } from '@testing-library/react';

import Estagio from '../../pages/Estagio';

describe('Select component', () => {
    it('Shoude be able to change value in select', async () => {
        const { getByTestId } = render(<Estagio />);

        const select = await waitForElement(
            () => getByTestId('select-field')
        );

        act(() => {
            fireEvent.change(select, { target: { value: 'Estágio I' } });
        });

        expect(select.value).toEqual('Estágio I');
    });
});