describe('examples page', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })
    it('should verify the path of all navbar links', () => {
        cy.getDataTest('why-cypress-page').click()
        cy.location('pathname').should('equal','/')
        
        cy.getDataTest('overview-page').click()
        cy.location('pathname').should('equal','/overview')

        cy.getDataTest('forms-page').click()
        cy.location('pathname').should('equal','/forms')

        cy.getDataTest('component-page').click()
        cy.location('pathname').should('equal','/component')
    })
    it('intercept/mock a response for a request', () => {
        cy.intercept("POST", "http://localhost:3000/examples", {
            fixture: "example.json"
            // body: {
            //     message: "sucessfully mocked up a response"
            // }
        })
        cy.getDataTest('examples-post-data-button').click()
    })
    it.only('test grudge', () => {
        // check title - Add Some Grudges
        cy.contains(/Add Some Grudges/i)

        // assert li legnth is 0
        cy.get('li').should('not.exist')

        // assert clear-button isn't exists
        cy.getDataTest('clear-grudges').should('not.exist')

        // add item number one (using div, within > input)
        cy.getDataTest('grudges-block').within(()=>{
            cy.get('input').type('grudge-number-one')
            cy.get('button').click()
        })

        // add another item number two 
        
        // assert li equal 2
        
        // use within the div and its() to locate index of first item in the array and assert if the name match the first item you've added to the array

        // check title (after item added)

        // delete an item and assert li equal 1 now one

        // use the clear-button to remove all items & assert li no exists and title change back to original title
    })
})