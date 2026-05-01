import { test, expect } from '@playwright/test';



test("Verify page title",async ({page})=>{

    //await page.goto("www.vwb5fl.pl");
    await page.goto("http://vwb5fl.pl");

    let title:string=await page.title();
        console.log("Title:",title);

    await expect(page).toHaveTitle("This is the title of the webpage!");

})