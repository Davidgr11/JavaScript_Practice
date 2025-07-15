const cliente = {
    nombre: 'David',
    saldo: 500,
    tipo: 'Premium',
}

describe('Testing cliente', () => {
    test('Cliente tiene nombre', () => {
        expect(cliente.nombre).not.toBe('');
    });

    test('Cliente tiene saldo', () => {
        expect(cliente.saldo).toBeGreaterThan(0);
    });
    test('Cliente tiene saldo', () => {
        expect(cliente.saldo).not.toBe(600);
    });

    test('Cliente es Premium', () => {
        expect(cliente.tipo).toBe('Premium');
    });
});