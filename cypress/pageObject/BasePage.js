class BasePage{
    click(locator){
        locator.should('be.visible');
        locator.click();
    }

    setValue(locator, text){
        locator.should('be.visible');
        locator.should('be.enabled');
        locator.type(text);
    }

    checkInsideOfFrame(locatorFrame, locator, message){
        cy.frameLoaded(locatorFrame);
        cy.iframe(locatorFrame).find(locator).should('be.visible', message);
    }

    clickInsideOfFrame(locatorFrame, locator){
        cy.frameLoaded(locatorFrame);
        cy.iframe(locatorFrame).find(locator).should('be.visible').click();
    }

    typeInsideOfFrame(locatorFrame, locator, text){
        cy.frameLoaded('iframe[src*="trade.amega.finance/terminal"]');
        cy.iframe(locatorFrame).find(locator).should('be.visible').type(text);
    }
}

export default BasePage;