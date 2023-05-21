import "../support/commands";''

describe('Homepage Spec', () => {
  beforeEach(() => {
    cy.getMoviesRequest();
    cy.homePage();
  });

  it('should have a navigation bar with a title', () => {
    cy.get('nav').contains('Flick Finder');
  });

  it('should display titles and images for all movies', () => {
    cy.get('.movie-card')
      .should('have.length', 40)
      .each(($movieCard) => {
        cy.wrap($movieCard).find('h3').should('be.visible');
        cy.wrap($movieCard).find('img').should('be.visible');
      });
  });

  it('should display a release date for all movies', () => {
    cy.get('.movie-card')
      .each(($movieCard) => {
        cy.wrap($movieCard).contains('Release Date:');
      });
  });

  it('should display a button for each movie', () => {
    cy.get('.movie-card')
      .each(($movieCard) => {
        cy.wrap($movieCard).find('button').should('be.visible');
      });
  });

  it('should navigate to movie details page when clicking the view button', () => {
    cy.getMovieRequest();

    cy.get('.movie-card')
      .eq(0)
      .find('button')
      .contains('View Details')
      .click();

    cy.url().should('include', 'http://localhost:3000/436270');
  });
});