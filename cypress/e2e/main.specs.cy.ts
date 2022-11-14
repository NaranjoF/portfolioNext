describe("test e2e for the main", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en");
  });

  it("social media buttons should have their correct redirects", () => {
    cy.findByTestId("linkedin-selector").should(
      "have.attr",
      "href",
      "https://www.linkedin.com/in/naranjofacundo"
    );
    cy.findByTestId("github-selector").should(
      "have.attr",
      "href",
      "https://github.com/NaranjoF"
    );
    cy.findByTestId("mail-selector").should(
      "have.attr",
      "href",
      "mailto:facundo.naranjo00@gmail.com"
    );
    cy.findByTestId("contact-selector").should(
      "have.attr",
      "href",
      "/#contact"
    );
  });
});
