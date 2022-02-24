import {Given,When, Then} from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the homepage", () => {
    cy.visit('/')
})
When('The page is loaded', () => {
    cy.get(`#__next`)
})
When('I click on the documentation button', async () => {
    cy.get('h2').contains('Documentation').click()
    cy.url().should('include', '/docs')
})
Then('I see the main page', () => {
    cy.get('h1').contains('Welcome to Next.js!')
})
