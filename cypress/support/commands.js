// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//const faker = require('./node_modules/faker');
/*
Cypress.Commands.add('generateRandomData', () => {
    const firstName = faker.name.firstName();
    const middleName = faker.name.lastName();
    const lastName = faker.name.lastName();
    const countryName = faker.name.countryName();
    const employeeId = faker.random.number({ min: 0, max: 9999 });
  
    const randomData = {
      firstName,
      middleName,
      lastName,
      countryName,
      employeeId,
    };
  
    cy.writeFile('cypress/fixtures/randomData.json', randomData);
  });
*/
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

Cypress.Commands.add('adminLogin', (username, password) => {
    cy.visit('/');
    cy.get('input[placeholder="Username"]').clear()
    .type(username);
    cy.get('input[placeholder="Password"]').clear()
    .type(password);
    cy.get('button[type="submit"]').click()

});

