describe('Login page', function() {
  it('should work', function() {
    cy.visit('/', {
      onBeforeLoad: (win) => {
        // clear session storage
        win.sessionStorage.clear()
      }
    })
    // cy.screenshot();
    cy.get('[name="username"]').type('admin')
    cy.get('[name="password"]').type(`admin_123{enter}`)
    cy.url().should('include', '/home')
    cy.contains('World Movies')
  })
})