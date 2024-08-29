describe('crear tag', () => {
  it('Verifico que se pueda crear un tag', () => {
    cy.visit('http://localhost:9000/');
    cy.get('#account-menu > span > span').click();
    cy.get('[data-cy=login]').click();
    cy.get('[data-cy=username]').type('admin');
    cy.get('[data-cy=password]').type('admin');
    cy.get('[data-cy=submit]').click();
    cy.get('.form').submit();
    cy.get('#entity-menu > span > span').click();
    cy.get('li.show li:nth-of-type(3) span').click();
    cy.get("[data-cy='entityCreateButton']").click();
    cy.get('[data-cy=name]').click();
    cy.get('[data-cy=name]').type('tag prueba');
    cy.get('#save-entity > span').click();
    cy.get('.ng-submitted').submit();
  });
});
