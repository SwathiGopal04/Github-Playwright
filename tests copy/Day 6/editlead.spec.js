import test from '@playwright/test'

test('Edit Lead',async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('//input[@id="username"]').fill('Demosalesmanager')
    await page.locator('//input[@id="password"]').fill('crmsfa')
    await page.locator('//input[@class="decorativeSubmit"]').click()

    await page.locator('//a[contains(text(),"CRM")]').click()
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Find Leads"]').click();
    await page.waitForTimeout(5000)
    await page.locator('(//input[@name="firstName"])[3]').fill('Swathi');
    await page.locator('(//input[@name="lastName"])[3]').fill('Gopal');
    await page.locator('//button[text()="Find Leads"]').click()
    //await page.waitForTimeout(5000)

    await page.locator('(//div[@class="x-grid3-cell-inner x-grid3-col-partyId"])[1]/a').click()
    await page.locator('//a[text()="Edit"]').click()
    //await page.waitForTimeout(5000)

    await page.locator('//input[@id="updateLeadForm_companyName"]').fill('Gavs')
    await page.locator('//input[@id="updateLeadForm_annualRevenue"]').fill('999999')
    await page.locator('//input[@id="updateLeadForm_departmentName"]').fill('Testing')
    //await page.waitForTimeout(5000)

    await page.locator('(//input[@class="smallSubmit"])[1]').click()
    await page.waitForTimeout(5000)

    const companyname1 = await page.locator('//span[@id="viewLead_companyName_sp"]').textContent()
    const firstname1=await page.locator('#viewLead_firstName_sp').textContent()
    const lastname1=await page.locator('#viewLead_lastName_sp').textContent()
    console.log('Company name after edit:',companyname1)
    console.log('First name after edit:',firstname1)
    console.log('Last name after edit:',lastname1)  
    await page.waitForTimeout(5000)

    console.log(`Page title is: ${await page.title()}`)

})