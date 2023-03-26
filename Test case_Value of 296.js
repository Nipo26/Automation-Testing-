it('should validate the total amount collected is 296', async () => {
  const table = await driver.findElement(By.id('table-fixed'));
  const rows = await table.findElements(By.css('tbody tr'));

  let totalAmount = 0;

  for (let row of rows) {
    const cells = await row.findElements(By.tagName('td'));
    const amount = cells[3];

    totalAmount += parseInt(await amount.getText());
  }

  expect(totalAmount).to.equal(296);
});
