import BasePage from "./BasePage";

class AddPaymentDetailsPage extends BasePage{
    getAddPaymentDetailHeader(){
        return cy.xpath('//h2[text()="Add Payment Details"]');
    }

    getContinueButton(){
        return cy.xpath('//button/p[text()="Continue"]');
    }

    getAllFieldsBankDetails(){
        return cy.xpath('//div/input[@data-testid="input"]');
    }

    getAllPaymentVariousButtons(){
        return cy.xpath('//input[@data-testid="test-radio"]/following-sibling::label');
    }

    getAddPaymentProviderButton(){
        return cy.xpath('//input[@data-testid="test-submit"]');
    }

    clickOnContinueButton(){
        this.click(this.getContinueButton());
    }

    fillInAllFieldBankDetails(){
        this.getAllFieldsBankDetails().each(($el) => {
            cy.wrap($el).should('be.visible').type('Test Bank Details');
        })
    }

    checkAllPaymentsVariousIsVisible(){
        return this.getAllPaymentVariousButtons().each(($el) => {
            cy.wrap($el).should('be.visible');
        })
    }

    clickAddPaymentProviderButton(){
        this.click(this.getAddPaymentProviderButton());
    }
}

export default new AddPaymentDetailsPage();