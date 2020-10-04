import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, act, waitForElement } from '@testing-library/react';

import Estagio from '../../pages/Estagio';

describe('Estagio page', () => {
    beforeEach(() => {
        Object.defineProperty(window, "localStorage", {
            value: {
              getItem: jest.fn(() => null),
              setItem: jest.fn(() => null)
            },
            writable: true
          });
    });

    it('Shoud be able to apply for a new internship', async () => {
        const { getByTestId, getByPlaceholderText, getByText } = render(<Estagio />);

        const select = await waitForElement(
            () => getByTestId('select-field')
        );

        fireEvent.change(select, { target: { value: 'Estágio I' } });

        expect(select.value).toEqual('Estágio I');

        //No trecho acima acabamos de testar se a opção selecionado pelo usuário no select foi mudada.

        const [inputName, inputMatricula, inputEmail] = await waitForElement(() => [
            getByPlaceholderText('Informe seu nome'),
            getByPlaceholderText('Informe sua matrícula'),
            getByPlaceholderText('Informe seu e-mail')
        ]);

        //No trecho acima acabamos de buscar a referência para cada elemento de input.

        act(() => {
            fireEvent.change(inputName, { target: { value: 'Emanuel Maximiliano' } });
            fireEvent.change(inputMatricula, { target: { value: '404513' } });
            fireEvent.change(inputEmail, { target: { value: 'maxdickinson@gmail.com' } });
        });

        //No trecho acima definimos os valores para cada um dos inputs.

        const formSubmit = await waitForElement(
            () => getByTestId('form-field')
        );

        act(() => {
           fireEvent.submit(formSubmit); 
        });

        expect(window.localStorage.setItem).toHaveBeenCalledWith('createInternship', JSON.stringify({"id": "1", "name": "Emanuel Maximiliano", "email": "maxdickinson@gmail.com", "matricula": "404513", "status": "pending" }));
    });
});