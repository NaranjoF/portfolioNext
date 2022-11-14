describe("test e2e for the about section", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en");
  });

  it("the projects button should go to the projects section", () => {
    cy.scrollTo(0, 700);
    cy.findByTestId("projects-button").click({ force: true });
    cy.url().should("eq", "http://localhost:3000/#projects");
  });
});
