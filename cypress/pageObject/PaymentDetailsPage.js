import BasePage from "./BasePage";

class PaymentDetailsPage extends BasePage{
    getPaymentDetailsHeader(){
        return cy.xpath('//h1[text()="Payment Details"]');
    }

    getPlusButton(){
        return cy.xpath('//a[@href="/payment-details/new"]');
    }

    getDeleteButton(){
        return cy.xpath('//button/p[text()="Delete"]');
    }

    getTrashBucket(){
        return cy.get('.sc-8ec5d33f-2');
    }

    getAllOfBankDetails(){
        return cy.xpath('//div/p[text()="Bank Details"]');
    }

    getArrow(){
        return cy.get('.sc-8ec5d33f-5');
    }

    getDeleteNotification(){
        return cy.xpath('//div[@data-testid="test-id-class"]//p[text()="Delete Bank Details payment details?"]');
    }

    getSuccessfulNotificationMessage(){
        return cy.xpath(
            '//div[@data-testid="test-id-class"]/p[text()="Payment details have been successfully deleted"]');
    }

    clickOnPlusButton(){
        this.click(this.getPlusButton());
    }

    clickOnArrow(){
        this.click(this.getArrow());
    }

    clickOnGetTrashBucket(){
        this.click(this.getTrashBucket());
    }

    clickDeleteButton(){
        this.click(this.getDeleteButton());
    }
}

export default new PaymentDetailsPage();