// Parent file
//  Create class Browser
//  Create 2 methods browserType, protected browserVersion

// Child file
// Create class Chrome 
// Create 1 method launchBrowser
// create object for Chrome

export class Browser{
    browserType(){
        console.log("Browser type is Chrome")
    }
    protected browserVersion(){
        console.log("Browser version is 114")
    }
}
