import React from 'react';
import { render, fireEvent, waitForElement, act } from '@testing-library/react';

import Estagio from '../../pages/Estagio';

describe('Button component', () => {
    it('should be able to render button', async () => {
        const { getByText, getByTestId } =  render(<Estagio />);

        const select = await waitForElement(
            () => getByTestId('select-field')
        );
    
        act(() => {
            fireEvent.change(select, { target: { value: 'Estágio I' } });
        });

        expect(select.value).toEqual('Estágio I');

        //No trecho acima acabamos de testar se a opção selecionado pelo usuário no select foi mudada.

        const button = await waitForElement(
            () => getByText('Solicitar')
        );

        expect(button);

        /*No trecho acima logo após o usuário ter selecionado uma opção de estágio, esperamos que um botão
        tenha sido renderizado.
        */
    });
});