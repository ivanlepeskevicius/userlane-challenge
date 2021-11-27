/*
Userlane challenge for QA engineer position: 
Visit the Userlane career page and check if any QA position is open and then apply for the position.
Make to use of the cypress network request feature to check for a successful response from the backend when the application is submitted.

This version resolves the challenge by looking for a position first, if it was found, it saves the URL so the other test can submit the form. 
*/

describe("Search for any QA engineer position", () => {
  const savedUrl = "cypress/fixtures/url.json";
  let posUrl;

  before(() => {
    cy.writeFile(savedUrl, { url: "No results" });
  });

  it("Find QA engineer position", () => {
    cy.visit("/careers");
    //Searches for the QA position
    cy.get(".job")
      .find(".job-title")
      .each((el, index, $list) => {
        const posTitle = el.find(".job-item__title").text();
        if (posTitle.includes("QA")) {
          cy.log("QA POSITION AVAILABLE");
          posUrl = el.prop("href");
          cy.writeFile(savedUrl, { url: posUrl });
        }
      });
  });
});
