/// <reference types="cypress"/>

describe('check element get concept', () => {

    it('element get testing', () => {

        cy.visit('https://www.freshworks.com/')

        cy.get(':nth-child(2) > .icon-arrow-down').click()
        cy.get('.feature-product-description').click()

        cy.url().should('include', '/platform')

        cy.get('.gradient-light > .l-page > :nth-child(3)')
        .should('be.visible')
        .and('contain','Customize, extend, and unify digital experiences')

        cy.get('ul.footer-nav li').should('have.length', 42)
        cy.get('ul.footer-nav li')
        .find("a[href*=footer]")
        .should('have.length', 24)

    })
})
