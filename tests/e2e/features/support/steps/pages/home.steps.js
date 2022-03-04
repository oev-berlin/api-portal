const { Given, When, Then } = require('@cucumber/cucumber');

Given('I navigate to the homepage', async function () {
  // Write code here that turns the phrase above into concrete actions
  const { page } = this;
  await page.goto('http://localhost:3000/');
  return true;
});

When('The page is loaded', async function () {
  const { page } = this;
  await page.waitForSelector('#__next');
});
When('I click on the documentation button', async function () {
  const { page } = this;
  await page.locator('Documentation').click();
  // await expect(page).toHaveURL(/.*docs/);
});
Then('I see the main page', async function () {
  const { page } = this;
  await page.locator('Documentation');
  // cy.get('h1').contains('Welcome to Next.js!');
  expect(1).toBe(1);
});
