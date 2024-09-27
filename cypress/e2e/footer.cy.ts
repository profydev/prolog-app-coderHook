import { version } from "../../package.json";

describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("shows current version of the app", () => {
      cy.get("[data-cy='footer-version'] > p")
        .contains(`Version: ${version}`)
        .should("be.visible");
    });

    it("footer links are working", () => {
      // check that each link leads to the correct page
      cy.get("li").contains("Docs").should("have.attr", "href", "#");

      cy.get("li").contains("API").should("have.attr", "href", "#");

      cy.get("li").contains("Help").should("have.attr", "href", "#");

      cy.get("li").contains("Community").should("have.attr", "href", "#");
    });

    it("show footer logo", () => {
      cy.get('[data-cy="footer-logo"] > img')
        .should("be.visible")
        .should("have.attr", "src", "/icons/footer-logo.svg");
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    it("shows current version of the app", () => {
      cy.get("[data-cy='footer-version'] > p")
        .contains(`Version: ${version}`)
        .should("be.visible");
    });

    it("footer links are working", () => {
      // check that each link leads to the correct page
      cy.get("li").contains("Docs").should("have.attr", "href", "#");

      cy.get("li").contains("API").should("have.attr", "href", "#");

      cy.get("li").contains("Help").should("have.attr", "href", "#");

      cy.get("li").contains("Community").should("have.attr", "href", "#");
    });

    it("show footer logo", () => {
      cy.get('[data-cy="footer-logo"] > img')
        .should("be.visible")
        .should("have.attr", "src", "/icons/footer-logo.svg");
    });
  });
});
