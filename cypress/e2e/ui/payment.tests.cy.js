import LoginPage from '../../pageObject/LoginPage';
import PreviewPage from '../../pageObject/PreviewPage';
import HomePage from '../../pageObject/HomePage';
import HubPage from "../../pageObject/HubPage";
import PaymentDetailsPage from "../../pageObject/PaymentDetailsPage";
import AddPaymentDetailsPage from "../../pageObject/AddPaymentDetailsPage";

describe('Payment Tests', () => {
  beforeEach(() => {
      cy.fixture('user').then((user) => {
          cy.visit(Cypress.config('baseUrl'));
          PreviewPage.clickSignInButton();
          LoginPage.fillInAndSubmit(user.email, user.password);
          HomePage.clickOnHubButton();
      });
  });

  it('Positive Adding Payment Details Test', () => {
      HubPage.clickOnPaymentsDetailsTab();
      PaymentDetailsPage.getPaymentDetailsHeader().should('be.visible',
            'Payment Details header is not visible');

      PaymentDetailsPage.clickOnPlusButton();
      AddPaymentDetailsPage.getAddPaymentDetailHeader().should('be.visible',
          'Add Payment Details header is not visible');

      assert(AddPaymentDetailsPage.checkAllPaymentsVariousIsVisible(),
          'All Payments Various is not visible');
      AddPaymentDetailsPage.clickOnContinueButton();
      AddPaymentDetailsPage.fillInAllFieldBankDetails();
      AddPaymentDetailsPage.clickAddPaymentProviderButton();

      PaymentDetailsPage.getAllOfBankDetails().should('be.visible',
          'Created Bank Details is not visible');
  });

    it('Positive Deleting Payment Details Test', () => {
        HubPage.clickOnPaymentsDetailsTab();
        PaymentDetailsPage.getPaymentDetailsHeader().should('be.visible',
            'Payment Details header is not visible');

        PaymentDetailsPage.clickOnArrow();
        PaymentDetailsPage.clickOnGetTrashBucket();
        PaymentDetailsPage.getDeleteNotification().should('be.visible',
            'Delete Notification is not visible');

        PaymentDetailsPage.clickDeleteButton();
        PaymentDetailsPage.getSuccessfulNotificationMessage().should('be.visible',
            'Successful Delete Notification is not visible');

        PaymentDetailsPage.getAllOfBankDetails().should('not.exist');
  });
});
