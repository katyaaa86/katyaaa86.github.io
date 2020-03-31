describe('Home Page', () => {
  before(() => {
    cy.visit('http://localhost:4200/');
  });
  it('check the form', () => {
    cy.get('button').should('be.disabled');
    cy.get('input')
      .type('How are you?')
      .should('have.value', 'How are you?');
    cy.get('button').should('be.enabled');
    cy.get('button').click()
    cy.get('input').should('empty');
    cy.get('button').should('be.disabled');
    cy.get('#likebutton').click();
    cy.get('#numberoflikes')
      .should(($numberoflikes) => {
        expect($numberoflikes).to.contain(1);
      });
    cy.get('#likebutton').click();
    cy.get('#numberoflikes')
      .should(($numberoflikes) => {
        expect($numberoflikes).to.contain(0);
      });

  });
});
