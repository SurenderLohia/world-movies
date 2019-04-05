describe('Login page with error scenarios', function() {

  beforeEach(function() {
    cy.visit('/', {
      onBeforeLoad: (win) => {
        // clear session storage
        win.sessionStorage.clear()
      }
    })
  })

  context('on submit', function() {
    it('should show error message if username is empty', function() {
      cy.get('[name="password"]').type(`admin_123{enter}`)
      cy.get('[data-cy="username-error"]')
        .should('be.visible')
        .should('contain', 'Please enter the username')
    });

    it('should show error message if password is empty', function() {
      cy.get('[name="username"]').type('admin')
      cy.get('[data-cy="submit"]').click()
      cy.get('[data-cy="password-error"]')
        .should('be.visible')
        .should('contain', 'Please enter the password')
    });

    it('should show error message for invalid credentials', function() {
      cy.get('[name="username"]').type('a')
      cy.get('[name="password"]').type(`a{enter}`)
      cy.get('[data-cy="invalid-credentials-error"]')
        .should('be.visible')
        .should('contain', 'Username or password is invalid')
    });

    it('should be login with valid credentials', function() {
      cy.get('[name="username"]').type('admin')
      cy.get('[name="password"]').type(`admin_123{enter}`)
      cy.url().should('include', '/home')
      cy.contains('World Movies')
    })
  });
})
