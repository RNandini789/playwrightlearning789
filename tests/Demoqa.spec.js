import { test, expect } from '@playwright/test';

test("verify the demo Qa text box fields", async ({ page }) => {
  await page.goto("https://demoqa.com/")

  await page.locator("(//div[@class='card-body']//h5)[1]").click()

  await page.locator("//li[contains(.,'Text Box')]").click()

  await expect(page).toHaveURL("https://demoqa.com/text-box")

  await page.locator("//input[@placeholder='Full Name']").fill("nandini")

  await page.locator("//input[@placeholder='name@example.com']").fill("rnandini793636@gmail.com")

  await page.locator("//textarea[@placeholder='Current Address']").fill("nagasandra")

  await page.locator("(//textarea[@class='form-control'])[2]").fill("bangalore")

  await page.locator("(//button[@type='button'])[2]").click()




 });