describe('fundementals test', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('Contains correct header text in fundamentals page', () => {
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    cy.addDataTest('fundamentals-header').should('contain.text','Testing Fundamentals') // custom made command
  })
  // can also use it.only to test only this test
  it('make sure accordion title exists and that it click-expand and the text inside it is visible', () => {
    cy.contains(/Fundamental 1\)/i).should('be.visible')
    cy.contains(/your tests will exist/i).as('accordion-opened').should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.get('@accordion-opened').should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/your tests will exist/i).should('not.be.visible')
  })
})