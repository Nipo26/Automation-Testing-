const webdriver = require('selenium-webdriver');
const { By } = webdriver;
const chai = require('chai');
const { expect } = chai;
const mocha = require('mocha');

const { describe, it, after } = mocha;

describe('Web Table Tests', () => {
  let driver;

  before(async () => {
    driver = await new webdriver.Builder()
      .forBrowser('chrome')
      .build();

    await driver.get('https://rahulshettyacademy.com/AutomationPractice/');
  });

  after(async () => {
    await driver.quit();
  });

  it('should validate the amount for Joe Postman from Chennai is 46', async () => {
    // test code goes here
  });

  it('should validate the total amount collected is 296', async () => {
    // test code goes here
  });
});
