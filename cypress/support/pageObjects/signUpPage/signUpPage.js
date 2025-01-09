const locator = require('./signUpLocators')

class signUpPage {

    inputUsername(username) {
        cy.wait(5000); // explicit wait
        cy.xpath(locator.input_username).type(username, {timeout: 5000});
    }
    
    inputPassword(password) {
        cy.wait(5000);
        cy.xpath(locator.input_password).type(password, {timeout: 5000});
    }

    clickRegisterButton() {
        cy.xpath(locator.button_register).click({timeout: 5000});
    }

    verifyRegistrationSuccess(){
        cy.on('window:alert', (a) => {
            expect(a).to.eq('Sign up successful.')
        })
        cy.wait(5000)
    }

}

module.exports = new signUpPage();
