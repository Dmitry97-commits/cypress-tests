import BasePage from "./BasePage";

class HubPage extends BasePage{
    getVerifySection(){
        return cy.get('#section-hub-verify');
    }

    getLogoutButton(){
        return cy.get('#section-hub-logout');
    }

    getPaymentDetailsTab(){
        return cy.xpath('//a[@href="/payment-details"]');
    }

    clickLogoutButton(){
        this.click(this.getLogoutButton());
    }

    clickOnPaymentsDetailsTab(){
        this.click(this.getPaymentDetailsTab());
    }
}

export default new HubPage();