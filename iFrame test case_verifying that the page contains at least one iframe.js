it('should validate that the page has an iframe', async () => {
  const iframes = await driver.findElements(By.tagName('iframe'));
  expect(iframes.length).to.be.at.least(1);
});
