import {test, expect,Locator} from "@playwright/test"


test("Verify Playwright Locators",async ({page})=>{


    await page.goto("https://demo.nopcommerce.com/");

    const logo:Locator= page.getByAltText("nopCommerce demo store")
    await expect(logo).toBeVisible();


    await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible();


    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
    await expect(page.getByRole("heading",{name:'Register'})).toBeVisible(); 
     

    await page.getByLabel('First name:').fill("John");  
    await page.getByLabel('Last name:').fill("Kenedy");
    await page.getByLabel('Email:').fill("abc@gmail.com");


    await page.getByPlaceholder("Search store").fill('Apple MacBook Pro');


    await expect(page.getByTitle("Home page link")).toHaveText("Home");
    await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");


    await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
    await expect(page.getByTestId("profile-name")).toHaveText("John Doe");

})

// add all the comments to this lesson