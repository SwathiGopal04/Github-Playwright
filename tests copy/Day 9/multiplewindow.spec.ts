import test from '@playwright/test'

test.only("Handle Multiple Windows",async({page,context})=>{

    await page.goto("https://www.leafground.com/window.xhtml")

//create promise -> do the action -> resolve the promise
//multiple context -> store value in opening window in []
//promise.all()

const [multipleWindow]=await Promise.all([

    context.waitForEvent('page'),
    page.locator("//span[text()='Open Multiple']").click()

])
//[window -parent , webtable & dashboard is child]
//[w1,c1,c2,c3.....]
//get length of the
const countPages=multipleWindow.context().pages()
console.log(countPages.length)

//dashboard -> mail id
let dashBroad:any
let webTable:any
for(let i=0;i<countPages.length;i++){

    await page.waitForTimeout(3000)
    const title=await countPages[i].title()
    console.log(title)

    if(title==='Dashboard'){
        //resolve promise -> child page is dashboard
        dashBroad=countPages[i]
    }
    // else if(title==='Web Table'){
    //    webTable=countPages[i]
    // }
}
await dashBroad.locator("#email").fill("dilip@testleaf")

//await page.bringToFront() //without closing window you can access in parent window 

})