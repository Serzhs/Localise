it("Check if we can add new language", () => {
  cy.visit("/")
    .get('[data-test-id="open-language-modal-button"]')
    .click()
    .get('.css-g1d714-ValueContainer')
    .click()
    .get('#react-select-2-option-0')
    .click()
    .get('[data-test-id="submit-language-modal-button"]')
    .click()
    .get('[data-test-id="language-card"]')
    .should('exist')

});

