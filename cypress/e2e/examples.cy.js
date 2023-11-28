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
            cy.getDataTest('add-grudge-button').click()
        })

        // add another item number two 
        cy.getDataTest('grudges-block').within(()=>{
            cy.get('input').type('grudge-two')
            cy.getDataTest('add-grudge-button').click()
        })

        // assert li equal 2
        cy.getDataTest('grudges-block').within(()=>{
            cy.get('li').should('have.length', 2)
        })
        
        // use within the div and its() to locate index of first item in the array and assert if the name match the first item you've added to the array
        cy.getDataTest('grudges-block').within(()=>{
            cy.get('li').its(0).should('include.text', 'grudge-number-one')
            cy.get('li').its(0).should('not.include.text', 'grudge-number-1')
        })

        // check title (after item added)
        cy.contains(/^Grudges$/i)

        // delete an item and assert li equal 1 now one
        cy.getDataTest('grudges-block').within(()=>{
            cy.get('li').its(0).find('[data-test="delete-one-grudge"]').click();
        })

        // use the clear-button to remove all items & assert li no exists and title change back to original title
        cy.getDataTest('clear-grudges').click()
        
        cy.getDataTest('grudges-block').within(()=>{
            cy.get('li').should('have.length',0)
        })

    })
})