import { test, expect } from '@playwright/test'

test('verify the employee details', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  await page.locator("//input[@placeholder='Username']").fill("Admin")

  await page.locator("//input[@type='password']").fill("admin123")

  await page.locator("//button[@type='submit']").click()

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

  await page.locator("//span[text()='PIM']").click()

  await page.locator("//li[contains(.,'Add Employee')]").click()

  await page.locator("//input[@placeholder='First Name']").fill("nandini")

  await page.locator("//input[@placeholder='Middle Name']").fill("lali")

  await page.locator("//input[@placeholder='Last Name']").fill("ramachandra")

  await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("897650")

  await page.locator("//button[@type='submit']").click()
  




  

 });