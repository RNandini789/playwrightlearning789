import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  await page.locator("//input[@placeholder='Username']").fill("Admin")

  await page.locator("//input[@placeholder='Password']").fill("admin123")

  await page.locator("//button[@type='submit']").click()

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  });
  
test('Verify login with valid username and invalid password', async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  await page.locator("//input[@placeholder='Username']").fill("Admin")

  await page.locator("//input[@placeholder='Password']").fill("3425667")

  await page.locator("//button[@type='submit']").click()

  });
  
test('Verify login with invalid username and valid password', async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  await page.locator("//input[@placeholder='Username']").fill("1rfgeubs")

  await page.locator("//input[@placeholder='Password']").fill("admin123")

  await page.locator("//button[@type='submit']").click()

  });