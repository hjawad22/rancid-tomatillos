// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("getMoviesRequest", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
        statusCode: 200,
        fixture: "movies"
    });
});

Cypress.Commands.add("getMovieRequest", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
        statusCode: 200,
        fixture: "movie"
    });
});

Cypress.Commands.add('moviesError', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
        statusCode: 404,
        fixture: "movie"
    });
});

Cypress.Commands.add('homePage', () => {
    cy.visit("http://localhost:3000/");
});
