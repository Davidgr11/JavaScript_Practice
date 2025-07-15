describe('Llena los campos para una nueva cita', () => {
    it('Validación de campos', () => {
        cy.visit('http://192.168.0.15:5501/24-Testing-JEST-CYPRESS/CYPRESS/index.html');
        cy.get('[data-cy="mascota-input"]').type('Firulais');
        cy.get('[data-cy="propietario-input"]').type('Juan Pérez');
        cy.get('[data-cy="telefono-input"]').type('123456789');
        cy.get('[data-cy="fecha-input"]').type('2023-10-01');
        cy.get('[data-cy="hora-input"]').type('10:00');
        cy.get('[data-cy="sintomas-textarea"]').type('Tos y estornudos');
        cy.get('[data-cy="submit-cita"]').click();
        cy.get('[data-cy="alerta"]').should('have.text', 'Se agregó correctamente');
        cy.get('[data-cy="alerta"]').should('have.class', 'alert-success');
    });
    it('Editar cita', () => {
        cy.get('[data-cy="btn-editar"]').click();
        cy.get('[data-cy="mascota-input"]').clear().type('Nico');
        cy.get('[data-cy="submit-cita"]').click();
        cy.get('[data-cy="alerta"]').should('have.text', 'Guardado Correctamente');
        cy.get('[data-cy="alerta"]').should('have.class', 'alert-success');
        cy.screenshot();
    });
    it('Eliminar cita', () => {
        cy.get('[data-cy="btn-eliminar"]').click();
    }); 
});