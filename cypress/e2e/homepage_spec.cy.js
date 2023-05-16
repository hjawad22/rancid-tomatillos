describe('Homepage Spec', () => {
  beforeEach(() => {
     cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2//movies/", {
       statusCode: 200,
       fixture: "movies.json"
     })
     .visit("http://localhost:3000/")})
 
 
   it('homepage should have a nav bar', () => {
     cy.get('Nav')
   })
 
   it('should display a title on the homepage', () => {
     cy.contains('Flick Finder')
   })
 
   it('should display all movies', () => {
     cy.get('img')
   })
 
   it('should display a titles for all movies', () => {
     cy.get('h3')
   })
 
   it('should display a release date for all movies', () => {
     cy.contains('Release Date:').should('be.visible')
   })
 
   it('should display a rating for all movies', () => {
     cy.contains('Rating')
   })
 
   it('should display a button for each movie', () => {
     cy.get('button')
   })
 
   it('button should say View Details', () => {
     cy.contains('View Details')
   })
 })
