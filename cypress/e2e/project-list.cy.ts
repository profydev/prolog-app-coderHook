import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("shows loading icon", () => {
      cy.get("[data-cy='loading-circle'] > img").should(
        "have.attr",
        "src",
        "/icons/loading-circle.svg",
      );
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      // wait for request to resolve
      cy.wait("@getProjects");

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(capitalize(mockProjects[index].status));
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    it("shows loading icon", () => {
      cy.get("[data-cy='loading-circle'] > img").should(
        "have.attr",
        "src",
        "/icons/loading-circle.svg",
      );
    });
  });
});
