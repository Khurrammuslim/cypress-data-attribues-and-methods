/// <reference types="cypress"/>

describe('Demo', () => {

    var url = 'http://localhost:3000'

    it('Login', () => {

        cy.visit(url+'/signin')
        cy.get('#username').type("Allie2")
        cy.get('#password').type("s3cret")
        cy.get('.MuiButton-label').click()
        
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="user-list-search-input"]').type("Ibrahim")
        cy.get(".MuiListItemText-secondary > :nth-child(1) > .MuiGrid-container > :nth-child(1)").should("contain.text", "Giovanna74")    

    })
    

    it.skip('get method testing', () => {

        cy.visit(url)
        
        cy.get('[data-test="signup"]').click()
        cy.url().should('include', '/signup')

        cy.get('[data-test="signup-title"]')
        .should('be.visible')
        .and('contain','Sign Up')

       
    })

    it.skip('find method testing', () => { 
    
        cy.visit(url+'/signup')
        cy.get('.makeStyles-form-4')
        .find("a[href*='/signin']")
        .should('have.length', 1)               

    })


    it.skip('within method testing', () => {

        cy.visit(url+'/signup')

        cy.get('.makeStyles-form-4').within(() => {

            cy.get('[data-test="signup-username"]').type('Khurram Muslim')

        })


    })
})

