import {test,expect} from "@playwright/test";



test("Verify page title",async ({page})=>{

   await page.goto("https://demowebshop.tricentis.com/"); 
   
   let title:string=await page.title();
   
   console.log("Title:",await page.title());

   await expect(page).toHaveTitle("Demo Web Shop"); 

})