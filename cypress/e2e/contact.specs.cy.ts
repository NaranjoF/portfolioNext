describe("test e2e for the contact section", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en");
  });

  it("social media buttons should have their correct redirects", () => {
    cy.scrollTo(0, 5500);
    cy.findByTestId("linkedin-button-contact").should(
      "have.attr",
      "href",
      "https://www.linkedin.com/in/naranjofacundo"
    );
    cy.findByTestId("github-button-contact").should(
      "have.attr",
      "href",
      "https://github.com/NaranjoF"
    );
    cy.findByTestId("mail-button-contact").should(
      "have.attr",
      "href",
      "mailto:facundo.naranjo00@gmail.com"
    );
    cy.findByTestId("contact-button-contact").should(
      "have.attr",
      "href",
      "/#contact"
    );
  });

  it("the form should be sent and cleaned", () => {
    cy.scrollTo(0, 5500);
    cy.findByTestId("input-name").type("Jhon", { force: true });
    cy.findByTestId("input-email").type("example@gmail.com", { force: true });
    cy.findByTestId("textarea-form").type("This is a test in Cypress", {
      force: true,
    });
    cy.findByTestId("button-contact").click({ force: true });
    cy.findByTestId("alert-contact-ok");
  });

  it("the form should throw errors", () => {
    cy.scrollTo(0, 5500);
    cy.findByTestId("input-name").type("J", { force: true });
    cy.findByTestId("button-contact").click({ force: true });
    cy.findByTestId("error-name-contact");
    cy.findByTestId("error-mail-contact");
    cy.findByTestId("error-text-contact");
  });

  it("the button will redirect us to the top of the page", () => {
    cy.scrollTo(0, 5800);
    cy.findByTestId("top-button").click({ force: true });
    cy.url().should("eq", "http://localhost:3000/");
  });
});
