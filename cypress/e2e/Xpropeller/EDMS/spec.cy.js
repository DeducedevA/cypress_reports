describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io/')
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
    cy.wait(3000)

    cy.get('#query-btn').should('contain', 'Button')
    // .should('have.class','query-btn')
    // .should('be.visible')
    // .should('be.enabled')

    //explicit assertion
    expect(true).to.be.true
    











  })
})