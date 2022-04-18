/// <reference types="cypress"/>

describe('within method concept', () => {

    it('within method testing', () => {

        cy.visit('https://www.amazon.com/')

        cy.get('.nav-search-field').within(() => {

            cy.get('#twotabsearchtextbox').type('Iphone 13')

        })


    })
})
