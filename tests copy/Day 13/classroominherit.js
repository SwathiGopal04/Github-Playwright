"use strict";
// Parent file
//  Create class Browser
//  Create 2 methods browserType, protected browserVersion
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
// Child file
// Create class Chrome 
// Create 1 method launchBrowser
// create object for Chrome
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.prototype.browserType = function () {
        console.log("Browser type is Chrome");
    };
    Browser.prototype.browserVersion = function () {
        console.log("Browser version is 114");
    };
    return Browser;
}());
exports.Browser = Browser;
// let br=new Browser()
// br.browserType()
// br.browserVersion() // we can access protected method within the class
//br.browserVersion() // we cannot access protected method outside the class
