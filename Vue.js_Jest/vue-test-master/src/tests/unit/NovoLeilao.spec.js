import NovoLeilao from '@/views/NovoLeilao';
import { createLeilao } from '@/http';
import { mount } from '@vue/test-utils';


jest.mock('@/http');

const $router = {

    push: jest.fn()
};

describe('Um novo leilão deve ser criado.', () => {

    test('Dado o formulário preenchido, um leilão deve ser criado.', () => {

        createLeilao.mockResolvedValueOnce();

        const wrapper = mount(NovoLeilao, {

            mocks: {

                $router
            }
        });
        wrapper.find('.produto').setValue('Um livro da cada do código');
        wrapper.find('.descricao').setValue('Umm maravilhoso livro sobre VUE.');
        wrapper.find('.valor').setValue(49);
        wrapper.find('form').trigger('submit');

        expect(createLeilao).toHaveBeenCalled();
    });
});