import LoginPage from '../../pageObject/LoginPage';
import PreviewPage from '../../pageObject/PreviewPage';
import HomePage from '../../pageObject/HomePage';
import TradeAccountPage from "../../pageObject/TradeAccountPage";

describe('Trading Page Tests', () => {
  before(() => {
      cy.fixture('user').then((user) => {
          cy.visit(Cypress.config('baseUrl'));
          PreviewPage.clickSignInButton();
          LoginPage.fillInAndSubmit(user.email, user.password);
      });
  });

  it('Positive Logging in Trading Page Test', () => {
      cy.fixture('user').then((user) => {
          HomePage.getWelcomeText().should('be.visible', 'Welcome text is not visible');

          HomePage.clickOnTradeAccount();
          TradeAccountPage.clickOnTradeButton();
          TradeAccountPage.clickOnAcceptInDisclaimer();
          TradeAccountPage.enterPassword(user.tradePassword);
          TradeAccountPage.clickOnConnectButton();
          TradeAccountPage.checkInsideOfFrame(TradeAccountPage.getFrameLocator(), TradeAccountPage.getGraphLocator(),
              'Graphs is not visible');
      });
  });
});