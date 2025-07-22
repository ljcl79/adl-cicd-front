describe('Pruebas automatizadas', () => {
  it('Verificar texto del home', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Hola Mundo');
  });
})