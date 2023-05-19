describe('Movie Details Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 200,
      fixture: "movie"
    });

    cy.visit('http://localhost:3000/436270');
  });

  it('movie details should have a nav bar', () => {
    cy.get('Nav');
  });

  it('should display a title on the homepage', () => {
    cy.get("Nav").contains('Flick Finder');
  });

  it('should display movie image', () => {
    cy.get('.main-movie-container')
      .get(".image-container")
      .get(".single-image");
  });

  it('displays Movie Overview', () => {
    cy.get('.main-movie-container')
      .contains('Movie Overview');
  });

  it('displays Realease Date', () => {
    cy.get('.main-movie-container')
      .contains('Release Date:');
  });

  it('displays movie rating', () => {
    cy.get('.main-movie-container')
      .contains('Rating:');
  });

  it('displays movie runtime', () => {
    cy.get('.main-movie-container')
      .contains('Runtime:');
  });

  it('displays movie revenue', () => {
    cy.get('.main-movie-container')
      .contains('Revenue:');
  });

  it('displays movie title', () => {
    cy.get('.main-movie-container')
      .get('h1');
  });

  it('user should be able to navigate back to the movie list', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
      statusCode: 200,
      fixture: "movies"
    });

    cy.get('.back-button').should('exist')
      .get('.back-button').click()
      .url().should('eq', 'http://localhost:3000/');
  });

  it('should display error message', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 404,
      fixture: "movie"
    });

    cy.get('.error-message')
      .contains('Failed to display movie details. Please try again!');
  });
});




