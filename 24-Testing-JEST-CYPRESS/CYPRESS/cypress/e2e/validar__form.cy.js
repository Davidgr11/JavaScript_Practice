describe('Validación del formulario', () => {
    it('Valida carga y alerta', () => {
        cy.visit('http://192.168.0.15:5501/24-Testing-JEST-CYPRESS/CYPRESS/index.html');
        cy.get('[data-cy="formulario"]').should('exist');

        cy.get('[data-cy="alerta"]').should('have.text', 'Todos los campos son Obligatorios');
        cy.get('[data-cy="alerta"]').should('have.class', 'alert-danger');
    });
});