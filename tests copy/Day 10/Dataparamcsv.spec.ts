// step:1 --> install csv-parse
//  npm install csv-parse

// step:2 --> use parse() --> imported from csv-parse/sync
// parse(pathofthefile)

// step:3 -->install fs (file system)
// npm install fs

// Each row will be considered as one test 
// 2 tests -->unique desc of the test

// path.join(__dirname,"") -->current directory with the filepath
// path.resolve(__dirname,"")

// columns-->true -->read first row as header


// create new file under utils for csv file to store diff test data



import test from '@playwright/test'
import {parse} from 'csv-parse/sync'
import  fs from 'fs'
import path from 'path'


//npm install csv-parse
//npm install fs -> file system
//create csv file under utils

//read value from csv file -> path
const readValue=parse(fs.readFileSync(path.join(__dirname,"../../utils/Login.csv")),
{columns:true, 
skip_empty_lines:true
})

//for(of)
//for(let data of readValue)

for(let csv of readValue){
test(`Login with CSV file with ${csv.TcName}`,async({page})=>{

    //console.log(csv[2].UserName + csv[2].Password)

     await page.goto("http://leaftaps.com/opentaps/control/main")
     await page.fill("#username",csv.UserName)
     await page.fill("#password",csv.Password)
     await page.click(".decorativeSubmit")

})

}
    


