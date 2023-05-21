describe('Error Page Spec', () => {
  beforeEach(() => {
   cy.getMoviesRequest()
  });

  it('should display error message for home page for client side error', () => {
    cy.visit('http://localhost:3000')
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 404,
      fixture: "movies"
    });

    cy.get('.error')
      .contains('Oops! We seem to be having some technical issues, please try again later!');
  });

  it('should display error message for client side error for a single movie and have a back button', () => {
    cy.visit('http://localhost:3000/436270')
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 404,
      fixture: "movie"
    });
  
    cy.get('.error')
      .contains('Failed to display movie details. Please try again!');
    cy.get('.back-error-button')
      .click()
      .url().should('eq', 'http://localhost:3000/');
  });

  it('should display error message for home page for server side error', () => {
    cy.visit('http://localhost:3000')
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 500,
      fixture: "movie"
    });

    cy.get('.error')
      .contains('Oops! We seem to be having some technical issues, please try again later!');
  });

  it('should display error message for server side error for a single movie and have a back button', () => {
    cy.visit('http://localhost:3000/436270')
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 500,
      fixture: "movie"
    });

    cy.get('.error')
      .contains('Failed to display movie details. Please try again!');
    cy.get('.back-error-button')
      .click()
      .url().should('eq', 'http://localhost:3000/');
  });

})
