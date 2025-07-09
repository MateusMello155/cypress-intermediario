describe('logout', () => {
 beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  it('logout com sucesso', () => {
    cy.logout();
    
    cy.url().should('eq', `${Cypress.config('baseUrl')}/users/sign_in`);
  })
})