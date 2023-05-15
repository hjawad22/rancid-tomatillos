describe('Homepage Spec', () => {
  it('should allow a user to visit the application homepage', () => {
    cy.visit('http://localhost:3000/')
  })

  it('homepage should have a nav bar', () => {
    cy.visit('http://localhost:3000/')
    cy.get('Nav')
  })

  it('should display a title on the homepage', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Flick Finder')
  })

  it('should display all movies', () => {
    cy.visit('http://localhost:3000/')
    cy.get('img')
  })

  it('should display a titles for all movies', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h3')
  })

  it('should display a release date for all movies', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Release Date:').should('be.visible')
  })

  it('should display a rating for all movies', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Rating')
  })

  it('should display a button for each movie', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button')
  })

  it('button should say View Details', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('View Details')
  })
})
