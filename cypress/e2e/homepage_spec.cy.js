describe('Homepage Spec', () => {
  beforeEach(() => {
   cy.getMoviesRequest()
     .visit("http://localhost:3000/")
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
   cy.getMovieRequest()
      .get('.view-button')
      .contains('View Details')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/436270');
  });
});