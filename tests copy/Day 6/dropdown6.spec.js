import test, {chromium} from '@playwright/test'

test(`Page open test case`,async()=>{
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.telerik.com/contact')
    await page.waitForTimeout(3000)
  
    console.log(`Page title is: ${await page.title()}`)

})

test(`Dropdown handling test case`,async({page})=>{
   
    await page.goto('https://www.telerik.com/contact')
    await page.waitForTimeout(3000)
  
    console.log(`Page title is: ${await page.title()}`)
    page.selectOption("#Dropdown-1",{value:"Product questions"})
    await page.waitForTimeout(3000)

})