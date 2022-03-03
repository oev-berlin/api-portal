const { Given, When, Then } = require("@cucumber/cucumber");

Given("I navigate to the homepage", async () => {
  await page.goto("http://localhost:3000/");
});
When("The page is loaded", async () => {
  await this.page.waitForSelector("#__next");
});
When("I click on the documentation button", async () => {
  await page.locator("Documentation").click();
  await expect(page).toHaveURL(/.*docs/);
});
Then("I see the main page", async () => {
  await page.locator("Documentation");
  // cy.get('h1').contains('Welcome to Next.js!');
});
