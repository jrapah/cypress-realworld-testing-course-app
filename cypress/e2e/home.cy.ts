// The describe() function takes two arguments. 
// The first is a string which is a description of the tests contained within it. 
// The second is a callback function. 

describe('Home Page', () => {

  // The body of describe() is “it block.”
  // This is our actual test.
  // Each it() within a given spec file is a single test. 
  // It takes the exact same arguments as the describe() function: 
  // first a string and then a callback function.

  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('the h1 contains the correct text', () => {

    // visit is a command that tells Cypress where to execute our tests. 

    //cy.visit('http://localhost:3000')

    //cy.get("h1").contains("Testing Next.js Applications with Cypress")
    // contains() is case-sensitive.

    cy.get("[data-test='hero-heading']").contains(
      "Testing Next.js Applications with Cypress"
    )
  })

  // We can tell Cypress to only run a specific test by using it.only()

  it.only("the features on the homepage are correct", () => {
    //cy.visit("http://localhost:3000")

    // eq command will allow us to access a specific index within an array of elements

    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
})