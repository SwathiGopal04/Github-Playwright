// <!-- Breakout:
// load url:https://www.leafground.com/window.xhtml
// create promise
// click on open button
// resolve promise
// get title childPage -->

import test, { chromium } from '@playwright/test'

test('Window Handling test case',async({page,context})=>{

    //const browser= await chromium.launch({channel:'chrome'})
    //const context1= await browser.newContext()
    //const page1=await context1.newPage()
    await page.goto("https://www.leafground.com/window.xhtml")

    const createPromise= context.waitForEvent('page')
    page.locator('//span[contains(text(),"Open")]').first().click()
    const childpage= await createPromise

    await page.waitForTimeout(5000)
    console.log(+await childpage.title())

})