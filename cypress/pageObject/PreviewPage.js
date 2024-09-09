import BasePage from './BasePage'

class PreviewPage extends BasePage{
    getSignInButton(){
        return cy.xpath('//a[@data-cy="sign_in"]');
    }

    getLogoAmega(){
        return cy.xpath('//a/img[@alt="Logo Amega"]');
    }

    clickSignInButton(){
        this.click(this.getSignInButton());
    }
}

export default new PreviewPage();