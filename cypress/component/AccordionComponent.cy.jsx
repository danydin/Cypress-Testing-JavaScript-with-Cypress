const { default: ItemsAccordion } = require("@/app/components/Accordion")

const items = [
  {
    summary: 'Example 1) Multi-page testing',
    details: `You can quite easily write tests across pages to better test
    entire user workflows. You can click on navigation buttons or use cy.visit().
    You can also use cy.location("pathname").should("equal", "/some-path") to assert 
    you're in the correct location`,
    id: '1',
  },
  {
    summary: 'Example 2) Intercepts',
    details: `Cypress provides different ways of working with
    network requests. One way is by using intercepts *docs & example`,
    id: '2',
  },
  {
    summary: 'Example 3) Helpful methods',
    details: `Cypress provides a ton of methods. It's not really feasible to try
    to learn every single one. A popular ones include cy.its(), cy.invoke(), cy.request(),
    cy.within() -- *docs`,
    id: '3',
  }
]
// paste the items object

describe('AccordionComponent', () => {
  it('Test accordion component', () => {

    // mount the accordion component and pass the items object
    cy.mount(<ItemsAccordion items={items}/>)

    // assert there are 3 items & not 4
    cy.getDataTest('accordion-wrapper').within(() => cy.get('[data-test^="accordion-item"]').should('have.length', 3).should('not.have.length', 4))


    // assert body first item isnt exist & click first item & assert body exists & click again & assert body not exists  
    cy.contains(/You can quite easily write tests across pages to better/i).should('not.be.visible')
    cy.getDataTest('accordion-item-1').within(() => cy.get('[role="button"]').click())
    cy.contains(/You can quite easily write tests across pages to better/i).should('be.visible')
    cy.getDataTest('accordion-item-1').within(() => cy.get('[role="button"]').click())
    cy.contains(/You can quite easily write tests across pages to better/i).should('not.be.visible')
  })
})