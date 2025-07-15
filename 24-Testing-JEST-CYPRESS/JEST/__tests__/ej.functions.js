function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}

describe('Grupo de pruebas', () => {
    test('Suma de 5 y 10', () => {
        expect(suma(5, 10)).toBe(15);
    });

    test('Resta de 10 y 5', () => {
        expect(resta(10, 5)).toBe(5);
    });

    test('Suma de 0 y 0', () => {
        expect(suma(0, 0)).toBe(0);
    });

    test('Resta de 0 y 0', () => {
        expect(resta(0, 0)).toBe(0);
    });
});