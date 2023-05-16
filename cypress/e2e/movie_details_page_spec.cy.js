describe('Movie Details Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2//movies/436270", {
      statusCode: 200,
      fixture: "movie"
    })
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2//movies/", {
      statusCode: 200,
      fixture: "movies"
    })
    .visit("http://localhost:3000/")})

  it('movie details should have a nav bar', () => {
    cy.get('Nav')
  })

  it('should display a title on the homepage', () => {

    cy.get("Nav").contains('Flick Finder')
  })

  it('should display movie image', () => {
  
    cy.get('.main-movie-container')
    .get(".image-container")
    .get(".single-image")
  })

  it('displays Movie Overview', () => {
    cy.get('.main-movie-container')
    .contains('Movie Overview')
  })

  it('displays Realease Date', () => {
    cy.get('.main-movie-container')
    .contains('Release Date:')
  })

  it('displays movie rating', () => {
      cy.get('.main-movie-container')
      .contains('Rating:')
  })

  it('displays movie runtime', () => {
       cy.get('.main-movie-container')
      .contains('Runtime:')
   })
    
   it('displays movie revenue', () => {
       cy.get('.main-movie-container')
      .contains('Revenue:')
  })

  it('displays movie revenue', () => {
       cy.get('.main-movie-container')
      .get('.movie-title')
    })


  it('navigates back to the movie list', () => {
    cy.get('.back-button').should('exist')

    cy.get('.back-button').click() 
    cy.url().should('eq', 'http://localhost:3000/')

  })
})