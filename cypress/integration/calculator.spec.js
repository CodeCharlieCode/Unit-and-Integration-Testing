describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working opperation buttons', () => {
    cy.get('#operator-divide').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-subtract').click();
    cy.get('#operator_add').click();
  })

  it('should be able to chain multiple opperations together', () => {
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('.display').should('contain', '343')
  })

  it('should display the result of a calculation', () => {
    cy.get('#number1').click();
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20')
  })

  it('should be able to add large numbers together', () => {
    cy.get('#number1').click();
    cy.get('#number6').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#number7').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7367')
  })

  it('should be able to display negative numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4')
  })

  it('should be able to add decimal work for decimal numbers', () => {
    cy.get('#number5').click();
    cy.get('#decimal').click();
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#decimal').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '11.3')
  })

  it('should display 0 when dividing a number by 0', () => {
    cy.get('#number8').click();
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0');
  })
})

