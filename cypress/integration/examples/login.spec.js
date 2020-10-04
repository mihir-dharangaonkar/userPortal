describe("Login Page", () => {
  it("should login as user and check login page", () => {
    cy.visit("http://localhost:3000/loginpage");
    cy.get("input")
      .first()
      .type("tristar.mihir@gmail.com")
      .should("have.value", "tristar.mihir@gmail.com");
    cy.get("input")
      .next()
      .should("exist");
    cy.get("#checkbox").should("exist");
    cy.contains("UserName");
    cy.contains("Password");
    cy.contains("I Agree for all terms and conditions");
    cy.get("a").contains("DataTable");
    cy.get("h1").contains("Portfolio form site");
    cy.get("#root").should("have.css", "background-image");
    cy.get("button").click();
  });

  it("should check Landing page", () => {
    cy.get("h1").contains("what you want to do?");
    cy.get("h2").should("have.length", "2");
    cy.get("h2")
      .first()
      .contains("Registration Page");
    cy.get("h2")
      .last()
      .contains("Data Table");
    cy.contains("FATCA/QI Forms");
    cy.get("h2")
      .first()
      .click();
  });

  it("Should launch Registration page and verify all fields of the Registration page", () => {
    cy.get("h1").contains("FATCA/QI Forms");
    cy.get("h2").contains("Basic Information");
    cy.get("table")
      .find("tbody>tr")
      .as("myTable")
      .contains("td", "कृपया आपले नाव प्रविष्ट करा")
      .next("td")
      .type("Mihir");
    cy.get("@myTable")
      .next()
      .contains("कृपया आपले आडनाव प्रविष्ट करा")
      .next("td")
      .type("Dharangaonkar");
    cy.get("@myTable")
      .next()
      .contains("कृपया आपला ईमेल प्रविष्ट करा")
      .next("td")
      .type("tristar.mihir@gmail.com");
    cy.get("@myTable").contains("आपले लिंग निवडा");
    cy.get("#Male")
      .check()
      .should("have.checked");
  });
});
