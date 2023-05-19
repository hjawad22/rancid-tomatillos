describe('Homepage Spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2//movies/", {
      statusCode: 200,
      fixture: "movies"
    }).visit("http://localhost:3000/");
  });

  it('homepage should have a nav bar with a title', () => {
    cy.get('Nav').contains('Flick Finder');
  });

  it('should display titles and images for all movies', () => {
    cy.get('.movie-card')
      .should('have.length', 40)
      .get('h3');
  });

  it('should display a release date for all movies', () => {
    cy.get('.movies-container')
      .contains('Release Date:');
  });

  it('should display a button for each movie', () => {
    cy.get('.movie-card')
      .get('.view-button');
  });

  it('should have a view button that takes user to that movie\'s specific details', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2//movies/436270", {
      statusCode: 200,
      fixture: "movie"
    });

    cy.get('.view-button')
      .contains('View Details')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/436270');
  });

  it('should display error message', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2//movies/", {
      statusCode: 404,
      fixture: "movie"
    });

    cy.get('.error')
      .contains('Oops! We seem to be having some technical issues, please try again later!')
  });

});