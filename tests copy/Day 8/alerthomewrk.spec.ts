import test, { expect } from '@playwright/test'


test('Clicking ok alert', async({page})=>{
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm', {
    waitUntil: 'domcontentloaded',   // ✅ avoid hanging on ads/resources
    timeout: 60000                   // ✅ increase timeout if site is slow
  })
    const frame= await page.frameLocator('//iframe[@name="iframeResult"]')
    page.on('dialog',async(dialog)=>{
    console.log("Dialog type1 is :" + dialog.type())
    console.log("Dialog message1 is :" + dialog.message())
    await dialog.accept()

    })
    await frame.getByText('Try it').click()
    await expect(frame.locator('#demo')).toHaveText('You pressed OK!')
    
})

test('Handle confirm alert - dismiss flow', async ({ page }) => {
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm', {
    waitUntil: 'domcontentloaded',   // ✅ avoid hanging on ads/resources
    timeout: 60000                   // ✅ increase timeout if site is slow
  })

  const frame = page.frameLocator('//iframe[@name="iframeResult"]')


  page.on('dialog', async (dialog) => {
    console.log("Dialog type2 is :", dialog.type());
    console.log("Dialog message2 is :", dialog.message());
    await dialog.dismiss();  // Dismiss = "Cancel"
  });

  await frame.getByText('Try it').click();

  await expect(frame.locator('#demo')).toHaveText('You pressed Cancel!')
})

test('Handle prompt alert', async ({ page }) => {
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const frame = page.frameLocator('//iframe[@name="iframeResult"]');

  page.once('dialog', async (dialog) => {
    console.log("⚡ Alert Type3: ", dialog.type());
    console.log("⚡ Alert Message3: ", dialog.message());
    await dialog.accept('Swathi'); // ✅ send text into prompt
  });

  await frame.getByText('Try it').click();
  await expect(frame.locator('#demo')).toContainText('Playwright User');
})