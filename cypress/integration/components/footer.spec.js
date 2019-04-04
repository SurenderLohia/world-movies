describe('Footer', function() {
  beforeEach(function() {
    cy.visit('/', {
      onBeforeLoad: (win) => {
        // clear session storage
        win.sessionStorage.clear()
      }
    })
    cy.get('[name="username"]').type('admin')
    cy.get('[name="password"]').type(`admin_123{enter}`)
  })

  it('Should have footer', function() {
    cy.get('[data-cy="footer"]').should('have.length', 1);
  })

  it('Vue.js link should be valid', function() {
    cy.get('[data-cy="vuejs"]').should('have.attr', 'href').and('include', 'https://vuejs.org/')
  })
});