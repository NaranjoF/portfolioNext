describe("test e2e for the netflix page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en/netflix");
  });

  it("the button (demo) must have its correct redirect", () => {
    cy.scrollTo(0, 1000);
    cy.findByTestId("demo-button").should(
      "have.attr",
      "href",
      "https://proyectncln-naranjof.vercel.app/"
    );
    cy.findByTestId("code-button").should(
      "have.attr",
      "href",
      "https://github.com/NaranjoF/netflix-clone"
    );
  });

  it("the button should redirect us to the projects page", () => {
    cy.scrollTo(0, 1000);
    cy.findByTestId("back-button").click({ force: true });
    cy.url().should("eq", "http://localhost:3000/#projects");
  });
});
