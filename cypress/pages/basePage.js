export default class BasePage {

  click(locator) {
    cy.get(locator).should("be.visible").and("be.enabled").click();
  }

  type(locator, text) {
    cy.get(locator).should("be.visible").clear().type(text);
  }

  getText(locator) {
    return cy.get(locator).should("be.visible");
  }

  isVisible(locator) {
    cy.get(locator).should("be.visible");
  }

  shouldContain(locator, text) {
    cy.get(locator).should("be.visible").and("contain.text", text);
  }

  shouldNotExist(locator) {
    cy.get(locator).should("not.exist");
  }
}

