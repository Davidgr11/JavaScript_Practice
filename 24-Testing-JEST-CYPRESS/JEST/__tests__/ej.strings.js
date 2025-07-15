const password = '123456';

describe('Valida password no vacio y 6 caracteres', () =>{
    test('Password no vacio', () => {
        expect(password).not.toBe('');
    });

    test('Password tiene 6 caracteres', () => {
        expect(password.length).toBe(6);
    });
})