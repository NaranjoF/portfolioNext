describe("test e2e for the projects section", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en");
  });

  it("each button of each project must redirect to the corresponding project", () => {
    cy.scrollTo(0, 4000);
    cy.findByTestId("project-button-1").click({ force: true });
    cy.url().should("eq", "http://localhost:3000/netflix");
  });
});
