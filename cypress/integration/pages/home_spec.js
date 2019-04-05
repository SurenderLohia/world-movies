describe('Home page', function() {
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

  context('Filter Flow', function() {
    it('filter by title', function() {
      const TITLE = 'A Touch of Sin'
      //cy.screenshot()
      cy.get('[name="filter-by-title"]').type(`${TITLE}{enter}`)
      cy.get('.card').its('length').should('eq', 1)
      cy.contains(TITLE)
    })
    it('filter by year', function() {
      const YEAR = '2002'
      cy.get('[name="filter-by-year"]').type(`${YEAR}{enter}`)
      cy.get('.card').its('length').should('eq', 4)
      cy.contains(YEAR)
    })
    it('filter by director', function() {
      const DIRECTOR = 'Chang-dong Lee'
      cy.get('[name="filter-by-director"]').type(`${DIRECTOR}{enter}`)
      cy.get('.card').its('length').should('eq', 1)
      cy.contains(DIRECTOR)
    })

    it('filter by genre', function() {
      const GENRE = 'Mystery'
      cy.get('[name="filter-by-genre"]').select(`${GENRE}`)
      cy.get('[name="filter"]').click()
      cy.get('.card').its('length').should('eq', 9)
      cy.contains(GENRE)
    })

    it('filter by language', function() {
      const LANGUAGE = 'Maya'
      cy.get('[name="filter-by-language"]').select(`${LANGUAGE}`)
      cy.get('[name="filter"]').click()
      cy.get('.card').its('length').should('eq', 1)
      cy.contains(LANGUAGE)
    })
  })
})
