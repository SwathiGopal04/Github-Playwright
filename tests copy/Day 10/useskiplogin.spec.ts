// Classroom:
// use storage state for Leaftaps application(url,usename,password,login,crmsfa)
// use it in other test
// click on Contacts
// click on create conatct


//eg




// // //url,username,password,clickOnLogin,crmsfa
// // import test from '@playwright/test'

// // test('Storage State',async({page})=>{

// //     await page.goto("http://leaftaps.com/opentaps/control/main")
// //     await page.fill("#username","DemoSalesManager")
// //     await page.fill("#password","crmsfa")
// //     await page.click(".decorativeSubmit")
// //     await page.getByText("CRM/SFA").click()

// //     //storage the information
// //     //under .json format -> store the file
// //     await page.context().storageState({path:"utils/LeafTapsLogin.json"})

// // })




// // import test from '@playwright/test'

// // test.use({storageState:"utils/LeafTapsLogin.json"})
// // test("Skip Login ",async({page})=>{
// //     await page.goto("http://leaftaps.com/crmsfa/control/main")
// //     await page.click("//a[text()='Leads']")


// // })


// // test.use({storageState:"utils/LeafTapsLogin.json"})
// // test("Click on Account tap",async({page})=>{
// // await page.goto("http://leaftaps.com/crmsfa/control/main")
// //     await page.click("//a[text()='Accounts']")
// // })

import test, { expect } from '@playwright/test';

test.use({ storageState:"utils/storelogin.json" });
test("Use skiplogin", async ({ page }) => {
  await page.goto("http://leaftaps.com/crmsfa/control/main");
  await page.click("//a[contains(text(),'Contacts')]")
  await page.waitForTimeout(3000);
  await page.click("//a[contains(text(),'Create Contact')]")
  await page.waitForTimeout(3000);

  // Verify page
  await expect(page).toHaveTitle(/Create Contact/);
  console.log('Page title is:', await page.title());
});