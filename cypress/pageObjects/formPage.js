class formPage {
  UploadCVbutton() {
    return cy.get("#resume-upload-input");
  }
  FileName() {
    return cy.get(".filename");
  }
  NameField() {
    return cy.get('input[name="name"]');
  }
  EmailField() {
    return cy.get('input[name="email"]');
  }
  PhoneField() {
    return cy.get('input[name="phone"]');
  }
  LinkedinField() {
    return cy.get('input[name="urls[LinkedIn]"]');
  }
  Githubfield() {
    return cy.get('input[name="urls[GitHub]"]');
  }
  AvailabilityField() {
    return cy.get(".card-field-input").first();
  }
  NoRelocationSelect() {
    return cy.get('input[value="No"]');
  }
  SalaryField() {
    return cy.get(".card-field-input").last();
  }
  AdditionalInfoField() {
    return cy.get("#additional-information");
  }
  SubmitBtn() {
    return cy.get('button[data-qa="btn-submit"]');
  }
}
export default formPage;
