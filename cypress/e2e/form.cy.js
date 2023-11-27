describe('form test', () => {
    beforeEach(()=>{
        cy.visit('/forms')
    })
    it('title input button success sending message', () => {
        cy.contains(/Testing Forms/i)
        cy.contains(/Successfully subbed:/i).should('not.exist')
        cy.getDataTest('input-email').find('input').as('type-in-form').type('din@gmail.com')
        cy.getDataTest('submit-button').click()
        cy.contains(/Successfully subbed:/i).should('be.visible')
        cy.wait(3000)
        cy.contains(/Successfully subbed:/i).should('not.exist')
        
        // add fail assertions that pass for wrong inputs email & empty input 
        cy.get('@type-in-form').type('dfdsg@gmail.co.il')
        cy.getDataTest('submit-button').click()
        cy.contains(/Invalid Email/i)
        cy.wait(3000)

        cy.getDataTest('submit-button').click()
        cy.contains(/fail!/i)
    
    })
})