import BasePage from './BasePage'

class LoginPage extends BasePage{
    getLoginPageHeader(){
        return cy.xpath('//h1[text()="Sign in to Amega"]');
    }

    getEmailField(){
        return cy.xpath('//input[@name="email"]');
    }

    getPasswordField(){
        return cy.xpath('//input[@name="password"]');
    }

    getSubmitButton(){
        return cy.xpath('//input[@value="Sign in"]');
    }

    getErrorMessage(){
        return cy.xpath('//p[text()="Incorrect email or password"]');
    }

    fillInAndSubmit(email, password){
        this.setValue(this.getEmailField(), email);
        this.setValue(this.getPasswordField(), password);
        this.click(this.getSubmitButton());
    }
}

export default new LoginPage()