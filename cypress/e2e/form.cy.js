describe('form test', () => {
    beforeEach(()=>{
        cy.visit('/forms')
    })
    it('title input button success sending message', () => {
        cy.contains(/Testing Forms/i)
        cy.contains(/Successfully subbed:/i).should('not.exist')
        cy.addDataTest('input-email').find('input').type('din@gmail.com')
        cy.addDataTest('submit-button').click()
        cy.contains(/Successfully subbed:/i).should('be.visible')
    })
})