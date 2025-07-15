const carrito = ['leche', 'pan', 'huevos'];

describe('Testing carrito de compras', () => {
    test('Carrito no vacio', () => {
        expect(carrito.length).toBeGreaterThan(0);
    });

    test('Carrito contiene leche', () => {
        expect(carrito).toContain('leche');
    });

    test('Carrito tiene 3 elementos', () => {
        expect(carrito.length).toBe(3);
    });
});