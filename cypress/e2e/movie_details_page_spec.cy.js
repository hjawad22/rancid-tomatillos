describe('Movie Details Page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  it('movie details should have a nav bar', () => {
    cy.visit('http://localhost:3000/')
    cy.get('Nav')
  })

  it('should display a title on the homepage', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Flick Finder')
  })

  it('should display movie image', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.single-image')
  })

  it('displays movie details', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Movie Overview')
    cy.contains('Release Date:')
    cy.contains('Rating:')
    cy.contains('Runtime:')
    cy.contains('Revenue:')
    cy.get('.overview')
    cy.get('.tagline')
    cy.get('h1')
  })

  it('navigates back to the movie list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.back-button').should('exist')

    cy.get('.back-button').click() 
    cy.url().should('eq', 'http://localhost:3000/')

  })
})