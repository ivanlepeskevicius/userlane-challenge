/*
Userlane challenge for QA engineer position: 
Visit the Userlane career page and check if any QA position is open and then apply for the position.
Make to use of the cypress network request feature to check for a successful response from the backend when the application is submitted.

This version resolves the challenge in one go by removing the Position's link attribute and visiting the external link.
For this, it's needed to disable the browser security ("chromeWebSecurity": false)
*/

import formPage from "../../pageObjects/formPage";

describe("Search for a position and complete the form in one go", () => {
  const dummyCV = "cv.pdf";
  let data;

  before(() => {
    cy.intercept("POST", "**/apply", {
      statusCode: 201,
      body: {
        result: "Form sent!",
      },
    }).as("submitForm");
    cy.fixture("formInfo").then((fileInfo) => {
      data = fileInfo;
    });
    cy.visit("/careers");
  });

  it("Apply for the QA engineer position", () => {
    const form = new formPage();
    //Searches for the QA position
    cy.get(".job-item__title")
      .contains("QA")
      .parent()
      .invoke("removeAttr", "target")
      .click();
    cy.url().should("include", "jobs.lever.co/userlane");
    cy.get(".postings-btn").first().click();

    //Completes form
    form.UploadCVbutton().attachFile(dummyCV);
    form.FileName().should("have.text", dummyCV);
    form.NameField().type(data.name);
    form.EmailField().type(data.email);
    form.PhoneField().type(data.phone);
    form.LinkedinField().type(data.linkedin);
    form.Githubfield().type(data.github);
    form.AvailabilityField().first().type(data.availability);
    form.NoRelocationSelect().check();
    form.SalaryField().type(data.salary);
    form.AdditionalInfoField().type(data.additional);

    cy.clickOnCaptcha();
    //cy.log('PLEASE RESOLVE THE CAPTHCA AND RESUME THE TEST EXECUTION')
    //cy.pause() // pauses the execution in order to manually resolve the captcha

    //Submits form
    form.SubmitBtn().click();
    cy.wait("@submitForm").its("response.statusCode").should("equal", 201);
  });
});
