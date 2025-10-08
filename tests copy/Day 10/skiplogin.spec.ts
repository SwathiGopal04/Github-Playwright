
import test from '@playwright/test'

test('Skip login',async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main')
    //await page.waitForTimeout(2000)
    await page.locator('(//input[@class="inputLogin"])[1]').fill('Demosalesmanager')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()

    //await page.waitForTimeout(2000)
    await page.locator('.crmsfa').click()
    await page.waitForTimeout(5000)
    console.log('Page title is:',await page.title())

    await page.context().storageState({path:"utils/storelogin.json"})
})