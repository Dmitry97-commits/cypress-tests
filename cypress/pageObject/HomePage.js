import BasePage from "./BasePage";

class HomePage extends BasePage{
    getWelcomeText(){
        return cy.xpath('//h3[text()="Welcome to Amega!"]');
    }

    getHubButton(){
        return cy.get('#button-hub');
    }

    getTradeAccount(){
        return cy.xpath('//section[@id="section-account"]//a[@href]');
    }

    clickOnHubButton(){
        this.click(this.getHubButton());
    }

    clickOnTradeAccount(){
        this.click(this.getTradeAccount());
    }
}

export default new HomePage();