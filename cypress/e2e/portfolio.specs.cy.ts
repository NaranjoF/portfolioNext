describe("test e2e for the portfolio page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en/portfolio");
  });

  it("the button (code) must have its correct redirect", () => {
    cy.scrollTo(0, 1000);
    cy.findByTestId("code-button").should(
      "have.attr",
      "href",
      "https://github.com/NaranjoF/portfolioNext"
    );
  });

  it("the button should redirect us to the projects page", () => {
    cy.scrollTo(0, 1000);
    cy.findByTestId("back-button").click({ force: true });
    cy.url().should("eq", "http://localhost:3000/#projects");
  });
});
