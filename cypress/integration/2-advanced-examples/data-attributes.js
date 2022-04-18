/// <reference types="cypress"/>

describe('Data attributes demo', () => {

    it('Login', () => {

        cy.visit('http://localhost:3000/signin')
        cy.get('#username').type("Allie2")
        cy.get('#password').type("s3cret")
        cy.get('.MuiButton-label').click()
        
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="user-list-search-input"]').type("Ibrahim")
        cy.get(".MuiListItemText-secondary > :nth-child(1) > .MuiGrid-container > :nth-child(1)").should("contain.text", "Giovanna74")    

    })
})

