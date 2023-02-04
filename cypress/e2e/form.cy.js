describe("base URL", () => {
  const taslkYapi = "";
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("input-dogrulama", () => {
    cy.get(".test-isim").type("Merhaba").should("have.value", "Merhaba");
  });
  it("form-kontrol", () => {
    cy.get(".test-isim").type("ONUR DEMİR").should("not.have.value", taslkYapi);
    cy.get(".test-email")
      .type("demironur9655@gmail.com")
      .should("not.have.value", taslkYapi);
    cy.get(".test-sifre")
      .type("SİFRE12341234")
      .should("not.have.value", taslkYapi);
    cy.get(".test-checkbox").check("true");

    cy.get(".test-button")
      .click({ force: true })
      .then((r) => console.log(r));
  });
});
