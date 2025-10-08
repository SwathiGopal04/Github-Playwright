import {test, chromium } from '@playwright/test';

test('Launching browser', async () => {
    const browser = await chromium.launch({ headless: false }); // will open the browser and not in headless mode so that we can see the browser UI
    const context = await browser.newContext(); // create a new browser context-window
    const page = await context.newPage(); // create a new page in the context
    await page.goto('https://www.google.com'); // navigate to Google    
    await page.waitForTimeout(3000); // Optional: wait for 3 seconds
    await browser.close(); // close the browser
});

test('Launching browser 2', async () => {
    const browser = await chromium.launch({ headless: false }); // will open the browser and not in headless mode so that we can see the browser UI
    const context = await browser.newContext(); // create a new browser context
    const page = await context.newPage(); // create a new page in the context
    await page.goto('https://www.google.com'); // navigate to Google    
    await page.waitForTimeout(3000); // Optional: wait for 3 seconds
    await browser.close(); // close the browser
});

