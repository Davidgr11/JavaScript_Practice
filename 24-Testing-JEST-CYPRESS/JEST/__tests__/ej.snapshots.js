const cliente2 = {
    nombre: 'David',
    saldo: 500,
    tipo: 'Premium'
}

describe('Testing cliente2', () => {
    test('Cliente2 existe', () => {
        expect(cliente2).toMatchSnapshot();
    });
});