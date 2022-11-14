describe("test e2e for the navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en");
  });

  // it("A shadow should appear in the navbar", () => {
  //   cy.scrollTo(0, 100);
  //   cy.findByTestId("navbar").should(
  //     "have.class",
  //     "fixed w-full h-20 shadow-xl z-[100] ease-in duration-300"
  //   );
  // });

  // it("Should Change Language", () => {
  //   cy.findByRole("combobox").select("ES");
  //   cy.url().should("eq", "http://localhost:3000/es");
  // });

  // it("should redirect to the about section", () => {
  //   cy.findByTestId("navbar-about").click();
  //   cy.url().should("eq", "http://localhost:3000/#about");
  // });

  // it("should redirect to the skills section", () => {
  //   cy.findByTestId("navbar-skills").click();
  //   cy.url().should("eq", "http://localhost:3000/#skills");
  // });

  // it("should redirect to the projects section", () => {
  //   cy.findByTestId("navbar-projects").click();
  //   cy.url().should("eq", "http://localhost:3000/#projects");
  // });

  // it("should redirect to the contact section", () => {
  //   cy.findByTestId("navbar-contact").click();
  //   cy.url().should("eq", "http://localhost:3000/#contact");
  // });

  // it("should redirect to the home section", () => {
  //   cy.findByTestId("navbar-home").click();
  //   cy.url().should("eq", "http://localhost:3000/");
  // });

  // it("the menu on the left should be seen on phones", () => {
  //   cy.viewport(550, 750);
  //   cy.findByTestId("outline-menu").click();
  //   cy.findByTestId("left-menu-container").should(
  //     "have.class",
  //     "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
  //   );
  //   cy.findByTestId("left-menu").should(
  //     "have.class",
  //     "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 xsmax:overflow-scroll xxsmax:px-5"
  //   );
  // });

  // it("the left menu should disappear on phones", () => {
  //   cy.viewport(550, 750);
  //   cy.findByTestId("outline-menu").click();
  //   cy.findByTestId("left-menu-close").click();

  //   cy.findByTestId("left-menu-container").should("not.have.class");
  //   cy.findByTestId("left-menu").should(
  //     "have.class",
  //     "fixed left-[-200%] top-0 p-10 ease-in duration-500"
  //   );
  // });

  // it("social media buttons in left menu should have their correct redirects", () => {
  //   cy.findByTestId("linkedin-left-menu").should(
  //     "have.attr",
  //     "href",
  //     "https://www.linkedin.com/in/naranjofacundo"
  //   );
  //   cy.findByTestId("github-left-menu").should(
  //     "have.attr",
  //     "href",
  //     "https://github.com/NaranjoF"
  //   );
  //   cy.findByTestId("mail-left-menu").should(
  //     "have.attr",
  //     "href",
  //     "mailto:facundo.naranjo00@gmail.com"
  //   );
  //   cy.findByTestId("contact-icon-left-menu").should(
  //     "have.attr",
  //     "href",
  //     "/#contact"
  //   );
  // });

  // it("the left menu should redirect to the about section", () => {
  //   cy.viewport(550, 750);
  //   cy.findByTestId("outline-menu").click();
  //   cy.findByTestId("about-left-menu").click();
  //   cy.url().should("eq", "http://localhost:3000/#about");
  // });

  // it("the left menu should redirect to the skills section", () => {
  //   cy.viewport(550, 750);
  //   cy.findByTestId("outline-menu").click();
  //   cy.findByTestId("skills-left-menu").click();
  //   cy.url().should("eq", "http://localhost:3000/#skills");
  // });

  // it("the left menu should redirect to the projects section", () => {
  //   cy.viewport(550, 750);
  //   cy.findByTestId("outline-menu").click();
  //   cy.findByTestId("projects-left-menu").click();
  //   cy.url().should("eq", "http://localhost:3000/#projects");
  // });

  // it("the left menu should redirect to the contact section", () => {
  //   cy.viewport(550, 750);
  //   cy.findByTestId("outline-menu").click();
  //   cy.findByTestId("contact-left-menu").click();
  //   cy.url().should("eq", "http://localhost:3000/#contact");
  // });

  // it("the left menu should redirect to the home section", () => {
  //   cy.viewport(550, 750);
  //   cy.findByTestId("outline-menu").click();
  //   cy.findByTestId("home-left-menu").click();
  //   cy.url().should("eq", "http://localhost:3000/");
  // });

  // it("the download button should point to the correct file", () => {
  //   cy.findByTestId("button-download")
  //     .should("have.attr", "href")
  //     .and("include", "/Naranjo Facundo CV en.pdf");
  // });

  // it("the background color and the color of the letters of the navbar, change when we are in a page of a project", () => {
  //   cy.visit("http://localhost:3000/en/netflix");
  //   cy.findByTestId("navbar").should(
  //     "have.attr",
  //     "style",
  //     "background-color: transparent;"
  //   );
  //   cy.findByTestId("link-navbar").should(
  //     "have.attr",
  //     "style",
  //     "color: rgb(236, 240, 243);"
  //   );
  //   cy.scrollTo(0, 100);
  //   cy.findByTestId("navbar").should(
  //     "have.attr",
  //     "style",
  //     "background-color: rgb(236, 240, 243);"
  //   );
  //   cy.findByTestId("link-navbar").should(
  //     "have.attr",
  //     "style",
  //     "color: rgb(31, 41, 55);"
  //   );
  // });

  it("the navbar icon should redirect us to the home page", () => {
    cy.findByTestId("logo-navbar").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
