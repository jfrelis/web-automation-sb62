class homePage {

    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    clickSignUpMenu() {
        cy.xpath('//a[@id="signin2"]').click({timeout: 5000});
    }

}

module.exports = new homePage();
