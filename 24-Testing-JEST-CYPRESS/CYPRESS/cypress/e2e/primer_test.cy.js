describe('Carga la página principal', () => {
    it('Visita la página principal', () => {
        cy.visit('http://192.168.0.15:5501/24-Testing-JEST-CYPRESS/CYPRESS/index.html');
        cy.contains('h1', 'Administrador de Pacientes de Veterinaria');
        cy.get('[data-cy="titulo-proyecto"]').should('exist');
        cy.get('[data-cy="titulo-proyecto"]').should('have.text', 'Administrador de Pacientes de Veterinaria');
        cy.get('[data-cy="titulo-proyecto"]').should('have.class', 'titulo');
        cy.get('[data-cy="titulo-proyecto"]').should('not.have.class', 'titulo-error');
    });
});