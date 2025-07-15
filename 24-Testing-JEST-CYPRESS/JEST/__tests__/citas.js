import Citas from '../js/classes/Citas.js';

describe('Pruebas a la clase Citas', () => {
    const citas = new Citas();
    const id = Date.now()
    test('Agregar una nueva cita', () => {
        const cita = {
            mascota: 'Hook',
            propietario: 'David',
            telefono: '123456789',
            fecha: '2023-10-01',
            hora: '10:00',
            sintomas: 'No come',
            id: id
        };

        citas.agregarCita(cita);
        expect(citas).toMatchSnapshot();
    });

    test('Actualizar una cita existente', () => {
        const citaActualizada = {
            mascota: 'Hook',
            propietario: 'David',
            telefono: '987654321',
            fecha: '2023-10-02',
            hora: '11:00',
            sintomas: 'Vomita',
            id: id
        };

        citas.editarCita(citaActualizada);
        expect(citas).toMatchSnapshot();
    });
    test('Eliminar una cita', () => {
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    });
});