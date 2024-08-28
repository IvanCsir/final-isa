describe('Admin login', () => {
  it('Verifico que se pueda hacer el login del admin', () => {
    cy.visit('http://localhost:9000/');
    cy.get('#account-menu > span > span').click();
    cy.get('#login > span').click();
    cy.get('[data-cy=username]').click();
    cy.get('[data-cy=username]').type('admin');
    cy.get('[data-cy=password]').type('admin');
    cy.get('[data-cy=submit]').click();
    cy.get('.form').submit();
  });
});
