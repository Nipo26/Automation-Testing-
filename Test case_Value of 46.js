it('should validate the amount for Joe Postman from Chennai is 46', async () => {
  const table = await driver.findElement(By.id('table-fixed'));
  const rows = await table.findElements(By.css('tbody tr'));

  let joePostmanRow, chennaiCell, amountCell;

  for (let row of rows) {
    const cells = await row.findElements(By.tagName('td'));
    const nameCell = cells[1];
    const locationCell = cells[2];
    const amount = cells[3];

    if (nameCell.getText() === 'Joe Postman' && locationCell.getText() === 'Chennai') {
      joePostmanRow = row;
      chennaiCell = locationCell;
      amountCell = amount;
      break;
    }
  }

  expect(amountCell.getText()).to.equal('46');
});
