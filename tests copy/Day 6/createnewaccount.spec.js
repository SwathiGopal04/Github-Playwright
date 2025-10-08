import test,{expect}  from '@playwright/test'

test.only(`Create new account`,async({page})=>{
    await page.goto('https://login.salesforce.com/')
    await page.getByLabel('Username').fill('dilip@testleaf.com')
    await page.getByLabel('Password').fill('Leaf@2025')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.waitForTimeout(5000)
    await expect(page).toHaveTitle('Home | Salesforce')
    await expect(page).toHaveURL('https://testleaf4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home')
    await page.waitForTimeout(3000)

    await page.getByRole('button',{name:"App Launcher"}).click()
    await page.getByRole('button',{name:'View All'}).click()
    await page.getByPlaceholder('Search apps or items...').fill('Service')
    await page.locator('(//mark[text()="Service"])[1]').click()
    await page.waitForTimeout(5000)
    await page.locator('(//span[@class= "slds-truncate"])[4]').click()
    await page.waitForTimeout (5000)
    await page.getByRole('button',{name:'New'}).click()
    await page.waitForTimeout (5000)
    await page.locator('input[name="Name"]').fill('TESTLEAF 2')
    await page.locator('//button[@name="SaveEdit"]').click()
    await page.waitForTimeout (5000)


    const toast = await page.locator('span.toastMessage')
    await expect(toast).toContainText('Testleaf')
    console.log(toast)
    
    })

test('Create a New Account in Salesforce', async ({ page }) => {
  // 1. Navigate to the URL
  await page.goto('https://login.salesforce.com/');

  // 2. Enter username using getByLabel
  await page.getByLabel('Username').fill('your-username');

  // 3. Enter password using getByLabel
  await page.getByLabel('Password').fill('your-password');

  // 4. Click Login
  await page.locator('#Login').click();

  // 5. Verify the title and url
  await expect(page).toHaveTitle(/Home|Salesforce/i); 
  await expect(page).toHaveURL(/lightning/);

  // 6. Click App Launcher using the class locator
  await page.locator('.slds-icon-waffle').click();

  // 7. Click View All using getByText
  await page.getByText('View All').click();

  // 8. Enter ‘Service’ in App Launcher Search box using getByPlaceholder
  await page.getByPlaceholder('Search apps or items...').fill('Service');

  // 9. Click Service using index based XPath (first match)
  await page.locator('(//mark[text()="Service"])[1]').click();

  // 10. Click Accounts using attribute based CSS selector
  await page.locator('a[title="Accounts"]').click();

  // 11. Click New using getByRole
  await page.getByRole('button', { name: 'New' }).click();

  // 12. Enter Account name using attribute based CSS selector
  await page.locator('input[name="Name"]').fill('Test Account Playwright');

  // 13. Click Save button using XPath
  await page.locator('//button[@name="SaveEdit"]').click();

  // 14. Verify the toast message displayed
  const toastMsg = page.locator('span.toastMessage');
  await expect(toastMsg).toContainText('was created');

  // Extra log
  console.log('✅ Account created successfully');
})