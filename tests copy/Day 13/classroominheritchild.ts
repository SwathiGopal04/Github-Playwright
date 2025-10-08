import {Browser} from "./classroominherit"


class Chrome extends Browser{   
    launchBrowser(){
        this.browserType()
        this.browserVersion()
        console.log("Launch Chrome Browser")
}
}

const chr = new Chrome();
chr.launchBrowser();
