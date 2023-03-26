const webdriver = require('selenium-webdriver');
const { By } = webdriver;
const chai = require('chai');
const { expect } = chai;
const mocha = require('mocha');

const { describe, it, after } = mocha;

describe('iFrame Tests', () => {
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

  it('should validate that the page has an iframe', async () => {
    // test code goes here
  });

  it('should interact with an element within the iframe', async () => {
    // test code goes here
  });
});
