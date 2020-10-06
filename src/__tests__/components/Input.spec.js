import React from 'react';
import { render, fireEvent, waitForElement, act } from '@testing-library/react';

import Estagio from '../../pages/Estagio';

describe('Input component', () => {
  it('should be able to render Input', async () => {
    const { getByPlaceholderText, getByTestId } = render(<Estagio />);

    const select = await waitForElement(() => getByTestId('select-field'));

    act(() => {
      fireEvent.change(select, { target: { value: 'Estágio I' } });
    });

    expect(select.value).toEqual('Estágio I');

    //No trecho acima acabamos de testar se a opção selecionado pelo usuário no select foi mudada.

    const inputName = await waitForElement(() =>
      getByPlaceholderText('Informe seu nome'),
    );

    act(() => {
      fireEvent.change(inputName, { target: { value: 'Emanuel Maximiliano' } });
    });

    expect(inputName.value).toEqual('Emanuel Maximiliano');

    //No techo acima acabamos de testar se o nome informado pelo usuário foi inserido no state.
  });
});
