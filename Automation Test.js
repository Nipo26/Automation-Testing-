const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();
options.addArguments("--disable-extensions");
options.addArguments("--disable-popup-blocking");
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(options)
  .build();

  async function main() {
    try {
  
    
    // Navigate to the webpage
    await driver.get("https://rahulshettyacademy.com/AutomationPractice/");

    // Click on radio button 3 and validate that only 1 radio button is checked
    const radio3 = await driver.findElement(By.css("input[value='radio3']"));
    await radio3.click();
    const radioButton = await driver.findElements(By.css("input[type='radio']"));
    for (let i = 0; i < radioButton.length; i++) {
      const isSelected = await radioButton[i].isSelected();
      if (i === 2) {
        if (!isSelected) {
          console.log("Radio button 3 is not selected!");
        }
      } else {
        if (isSelected) {
          console.log(`Radio button ${i + 1} is also selected!`);
        }
      }
    }

    // Click on Radio button 2 and validate that button 2 is the only checked button
    const radio2 = await driver.findElement(By.css("input[value='radio2']"));
    await radio2.click();
    const isSelected = await radio2.isSelected();
    if (!isSelected) {
      console.log("Radio button 2 is not selected!");
    }
    const radioButtons = await driver.findElements(By.css("input[type='radio']"));
    for (let i = 0; i < radioButtons.length; i++) {
      const isSelected = await radioButtons[i].isSelected();
      if (i === 1) {
        if (!isSelected) {
          console.log("Radio button 2 is not selected!");
        }
      } else {
        if (isSelected) {
          console.log(`Radio button ${i + 1} is also selected!`);
        }
      }
    }

    // Type in the field ‘South’ and select ‘South Africa’ from the list of options
    const suggestion = await driver.findElement(By.id("autocomplete"));
    await suggestion.sendKeys("South");
    await driver.sleep(1000);
    await suggestion.sendKeys(Key.ARROW_DOWN);
    await suggestion.sendKeys(Key.RETURN);

    // Clear the field and type ‘Republic’ and select the first option listed
    await suggestion.clear();
    await suggestion.sendKeys("Republic");
    await driver.sleep(1000);
    await suggestion.sendKeys(Key.ARROW_DOWN);
    await suggestion.sendKeys(Key.RETURN);

    // Check all the checkboxes and validate that they are all
    const checkboxe = await driver.findElements(By.css("input[type='checkbox']"));
    for (let i = 0; i < checkboxe.length; i++) {
      await checkboxe[i].click();
      const isSelected = await checkboxe[i].isSelected();
      if (!isSelected) {
        console.log(`Checkbox ${i + 1} is not selected!`);
      }
    }

    //Uncheck the first checkbox and validate that the other two remain checked:

    const checkbox1 = await driver.findElement(By.css("input[type='checkbox']:first-of-type"));
await checkbox1.click();
const isSelected1 = await checkbox1.isSelected();
if (isSelected1) {
  console.log("Checkbox 1 is still selected!");
}
const checkboxes = await driver.findElements(By.css("input[type='checkbox']"));
for (let i = 1; i < checkboxes.length; i++) {
  const isSelected = await checkboxes[i].isSelected();
  if (!isSelected) {
    console.log(`Checkbox ${i + 2} is not selected!`);
}
}}
catch(Exception) {

} finally {

}}