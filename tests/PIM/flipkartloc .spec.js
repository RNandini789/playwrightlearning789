import { test, expect } from '@playwright/test';

test('flipkart iphone price', async ({ page }) => {

  await page.goto('https://www.flipkart.com/');

  await page.locator("//input[@placeholder='Search for Products, Brands and More']").fill("iphone 14 pro max")
  
    await page.locator("//button[@type='submit']").click()

    await page.locator("//div[@class='_30jeq3 _16Jk6d']").first().waitFor();

    const price = await page.locator("//div[@class='_30jeq3 _16Jk6d']").first().textContent();

    console.log("The price of iPhone 14 Pro Max is: " + price);
    
    expect(price).toBeDefined();

});