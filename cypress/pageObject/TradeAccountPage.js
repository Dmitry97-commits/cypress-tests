import BasePage from "./BasePage";

class TradeAccountPage extends BasePage{
    getFrameLocator(){
        return 'iframe[src*="trade.amega.finance/terminal"]';
    }

    getGraphLocator(){
        return 'div.chart-info';
    }

    getTradeButton(){
        return cy.xpath('//a[contains(@href,"mt5-web-trader")]');
    }

    clickOnTradeButton(){
        this.click(this.getTradeButton());
    }

    enterPassword(text){
        this.typeInsideOfFrame(this.getFrameLocator(), 'input[name="password"]', text);
    }

    clickOnConnectButton(){
        this.clickInsideOfFrame(this.getFrameLocator(), 'button[type=submit]');
    }

    clickOnAcceptInDisclaimer(){
        this.clickInsideOfFrame(this.getFrameLocator(), 'button');
    }
}

export default new TradeAccountPage();