describe('Crear blog', () => {
  it('Verifico que se pueda crear un blog', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#account-menu > span > span').click();
    cy.get('#login > span').click();
    cy.get('[data-cy=username]').type('ADMIN');
    cy.get('[data-cy=password]').type('admin');
    cy.get('[data-cy=submit]').click();
    cy.get('.form').submit();
    cy.get('#entity-menu > span > span').click();
    //cy.get('.active > span').click();
    cy.get('li.show li:nth-of-type(2) span').click();
    cy.get("[data-cy='entityCreateButton']").click();
    cy.get('[data-cy=title]').click();
    cy.get('[data-cy=title]').type('{backspace}');
    cy.get('[data-cy=title]').type('{backspace}');
    cy.get('[data-cy=title]').type('Post cypress');
    cy.get('[data-cy=content]').click();
    cy.get('[data-cy=content]').type('post de cypress');
    cy.get('.fa-floppy-disk > path').click();
    //     cy.get('.ng-submitted').submit();
  });
});
