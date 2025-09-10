import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {

  await page.goto("https://www.saucedemo.com/v1/")

  await page.locator("//input[@data-test='username']").fill("problem_user")

  await page.locator("//input[@placeholder='Password']").fill("secret_sauce")

  await page.locator("//input[@type='submit']").click()

  });