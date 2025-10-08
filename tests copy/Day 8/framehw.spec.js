import {test,expect} from '@playwright/test'

test("Frame homework",async({page})=>{
    await page.goto('https://leafground.com/frame.xhtml')


    const frameCount=page.frames()
    console.log('Total frame in page:' +page.frames().length)


    const frame1=frameCount[1]

    const button= frame1.locator("button")
    await button.click()
    await expect(button).toHaveText('Hurray! You Clicked Me.')
    await frame1.waitForTimeout(5000)

    const parentFrame= page.frameLocator("iframe[src='page.xhtml']")
    const childFrame= parentFrame.frameLocator("iframe[src='framebutton.xhtml']")

    const button2= childFrame.locator("#Click")
    await button2.click()
    await expect(button2).toHaveText('Hurray! You Clicked Me.') 

})