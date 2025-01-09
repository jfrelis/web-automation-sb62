const homePage = require('../support/pageObjects/homePage/homePage');
const signUpPage = require('../support/pageObjects/signUpPage/signUpPage');
const { faker }  = require('@faker-js/faker');

describe('Sign Up', () => {
  // before / suite setup
  // beforeEach  / test setup

  beforeEach(() => {
    homePage.goToHomePage();
    homePage.clickSignUpMenu();
  })

  // after / suite teardown
  // afterEach / test teardown

  it('with valid data', () => {
    signUpPage.inputUsername(faker.person.firstName() + "123");
    signUpPage.inputPassword("jojotest12356");
  }),
  it('with invalid data - empty input', () => {
    signUpPage.inputUsername(faker.person.firstName() + "123");
    signUpPage.inputPassword("jojotest12356");
  }),
  it('with invalid data - registered data', () => {
    signUpPage.inputUsername(faker.person.firstName() + "123");
    signUpPage.inputPassword("jojotest12356");
  })

  afterEach(() => {
    signUpPage.clickRegisterButton();
    signUpPage.verifyRegistrationSuccess();
  })
})