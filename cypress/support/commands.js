import "cypress-file-upload";

Cypress.Commands.add("clickOnCaptcha", () => {
  cy.get("iframe")
    .its("0.contentDocument.body")
    .should("not.be.undefined")
    .and("not.be.empty")
    .then(cy.wrap)
    .find("#checkbox")
    .should("be.visible")
    .click();
});
