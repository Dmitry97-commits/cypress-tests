import BankDetailsRequest from "../../models/bankDetailsRequest";
import BankDetail from "../../models/bankDetail";
import {faker} from "@faker-js/faker";

function getUserData() {
  return cy.fixture('user');
}

describe('Upload Payment Details API Test', () => {

  let user;
  let token;
  let id;

  before(() => {
    getUserData().then((data) => {
      user = data;

      cy.getToken(user.email, user.password, false).then((accessToken) => {
        token = accessToken;
      });
    });
  });

  it('Positive POST Payment Details Test /200', () => {
    const bankDetailsRequest = new BankDetailsRequest([
      new BankDetail("Bank Account Holder Name", faker.name.fullName()),
      new BankDetail("IBAN", faker.finance.iban()),
      new BankDetail("Recipient Bank Name", faker.company.name()),
      new BankDetail("Recipient Bank Address", faker.address.streetAddress()),
      new BankDetail("Recipient Bank Swift", faker.finance.bic())
    ], 6);

    cy.uploadPaymentDetails(bankDetailsRequest, token).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      id = response.body.id;
    });
  });

  it('Positive GET Payment Details Test /200', () => {
    cy.getAllPaymentsDetails(token).then((response) => {
      expect(response.body[0]).to.have.property('id');
    });
  });

  it('Positive DELETE Payment Details Test /200', () => {
    cy.deletePaymentsDetails(id, token).then((response) => {
      expect(response.status).to.eq(200);
    });

    cy.getAllPaymentsDetails(token).then((response) => {
      expect(response.body).to.have.empty;
    });
  });
});