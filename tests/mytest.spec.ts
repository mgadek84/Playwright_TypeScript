import { test, expect } from '@playwright/test';



test("Verify page title",async ({page})=>{

    await page.goto("vwb5fl.pl");

    let title:string=await page.title();
        console.log("Title:",title);

    await expect(page).toHaveTitle("VWB5FL");

})

