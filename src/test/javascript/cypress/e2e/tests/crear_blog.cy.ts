describe('Crear blog', () => {
  it('Verifico que se pueda crear un blog', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#account-menu > span > span').click();
    cy.get('[data-cy=login]').click();
    cy.get('[data-cy=username]').type('admin');
    cy.get('[data-cy=password]').type('admin');
    cy.get('[data-cy=submit]').click();
    cy.get('.form').submit();
    cy.get('#entity-menu > span > span').click();

    cy.get('li.show li:nth-of-type(1) span').click();
    cy.get("[data-cy='entityCreateButton']").click();
    cy.get('[data-cy=name]').click();
    cy.get('[data-cy=name]').type('Cypress blog');
    cy.get('[data-cy=handle]').click();
    cy.get('[data-cy=handle]').type('cypress');
    cy.get('[data-cy=entityCreateSaveButton]').click();
    //     cy.get('.ng-submitted').submit();
  });
});
