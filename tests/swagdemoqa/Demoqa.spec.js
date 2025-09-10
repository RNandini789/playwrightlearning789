import { test, expect } from '@playwright/test';
import testcase from"../../testData/{}demoqa.json"

test("verify the demo Qa text box fields", async ({ page }) => {
  await page.goto("https://demoqa.com/")

  await page.locator("(//div[@class='card-body']//h5)[1]").click()

  await page.locator("//li[contains(.,'Text Box')]").click()

  await expect(page).toHaveURL("https://demoqa.com/text-box")

  await page.locator("//input[@placeholder='Full Name']").fill(testcase.fullname)

  await page.locator("//input[@placeholder='name@example.com']").fill(testcase.email)

  await page.locator("//textarea[@placeholder='Current Address']").fill(testcase.currentAdress)

  await page.locator("(//textarea[@class='form-control'])[2]").fill(testcase.permanentAdress)

  await page.locator("(//button[@type='button'])[2]").click()




 });