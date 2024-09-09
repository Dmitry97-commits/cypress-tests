import LoginPage from '../../pageObject/LoginPage';
import PreviewPage from '../../pageObject/PreviewPage';
import HomePage from '../../pageObject/HomePage';
import HubPage from "../../pageObject/HubPage";
import { faker } from '@faker-js/faker';

describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  it('Positive Login Test', () => {
    cy.fixture('user').then((user) => {
      PreviewPage.getLogoAmega().should('be.visible', 'Logo of Amega is not visible');

      PreviewPage.clickSignInButton();
      LoginPage.getLoginPageHeader().should('be.visible', 'Login page header is not visible')

      LoginPage.fillInAndSubmit(user.email, user.password);
      HomePage.getWelcomeText().should('be.visible', 'Welcome text is not visible');
      });
  });

  it('Negative Login Test', () => {
    const invalidLogin = faker.internet.email();
    const invalidPassword = faker.internet.password(12, false, /[A-Za-z0-9]/, 'A1');

    PreviewPage.getLogoAmega().should('be.visible', 'Logo of Amega is not visible');

    PreviewPage.clickSignInButton();
    LoginPage.fillInAndSubmit(invalidLogin, invalidPassword);

    LoginPage.getErrorMessage().should('be.visible', 'Error message is not visible');
  });

  it('Positive Logout Test', () => {
    cy.fixture('user').then((user) => {
      PreviewPage.getLogoAmega().should('be.visible', 'Logo of Amega is not visible');

      PreviewPage.clickSignInButton();
      LoginPage.fillInAndSubmit(user.email, user.password);
      HomePage.getWelcomeText().should('be.visible', 'Welcome text is not visible');

      HomePage.clickOnHubButton()
      HubPage.getVerifySection().should('be.visible', 'Verify section on Hub is not visible')

      HubPage.clickLogoutButton()
      LoginPage.getLoginPageHeader().should('be.visible', 'Login page header is not visible')
      });
  });
});
