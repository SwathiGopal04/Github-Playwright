import test from '@playwright/test'

test(`CREATE A LEAD TEST CASE`,async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    //await page.waitForTimeout(2000)
    await page.locator('(//input[@class="inputLogin"])[1]').fill('Demosalesmanager')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()

    //await page.waitForTimeout(2000)
    await page.locator('.crmsfa').click()
    //await page.waitForTimeout(2000)
    console.log('Page title is:',await page.title())
    //await page.waitForTimeout(3000)

    await page.locator('//a[text()="Leads"]').click()
    //await page.waitForTimeout(5000)

    await page.locator('//a[text()="Create Lead"]').click()
    //await page.waitForTimeout(5000)

    await page.waitForURL('**/createLeadForm')

    await page.locator('#createLeadForm_companyName').fill("Neurealm")
    await page.locator('#createLeadForm_firstName').fill("Swathi")
    await page.locator('#createLeadForm_lastName').fill("Gopal")
    await page.selectOption("#createLeadForm_dataSourceId", {value:"LEAD_OTHER"})
    await page.locator('#createLeadForm_personalTitle').fill("Ms")
    await page.locator('#createLeadForm_generalProfTitle').fill('Software Tester')
    await page.locator('[name=annualRevenue]').fill("99")
    await page.selectOption('[name="marketingCampaignId"]',{value:"9000"})
    await page.selectOption('#createLeadForm_industryEnumId',{value:"IND_SOFTWARE"})
    await page.selectOption('#createLeadForm_ownershipEnumId',{value:"OWN_PARTNERSHIP"})
    //await page.waitForTimeout(5000) 

    await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('9876543210')
    await page.selectOption('//select[@name="generalStateProvinceGeoId"]',{value:"AK"})
    await page.waitForTimeout(5000) 
    await page.locator('//input[@class="smallSubmit"]').click()
    await page.waitForTimeout(5000)
    console.log(`Page title is: ${await page.title()}`)


    // LEAD CREATION VALIDATION
    // getting the text and validating

    const companyname= await page.locator('//span[@id="viewLead_companyName_sp"]').textContent()
    const firstname=await page.locator('//span[@id="viewLead_firstName_sp"]').textContent()
    const lastname=await page.locator('//span[@id="viewLead_lastName_sp"]').textContent()
    const status=await page.locator('//span[@id="viewLead_statusId_sp"]').textContent()
    await page.waitForTimeout(5000)

    console.log(companyname)
    console.log(firstname)
    console.log(lastname)
    console.log(status)


    if(companyname.includes("Neurealm") && firstname.includes("Swathi") && lastname.includes("Gopal"))
    {
        console.log('Lead created successfully')
    }
    else{
        console.log('Lead not created')
    }
console.log(`Final Page title is: ${await page.title()}`)
    
}

)

