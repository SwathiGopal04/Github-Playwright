import axios from "axios"

let endPonit="https://swathigopal04.atlassian.net/rest/api/2/issue"
let emailId="swathigopal04@gmail.com"
let apiToken="ATATT3xFfGF0oN6O-Ahz2hd4_XogHDmvIzIWwKLbPsAvPxQUsB-Zw_UuYb_nHf9ea6coyCq56QFTcwZ4ORJYNJUDBxL1aHeZJ0b2mUuahlyuUFVeJF92AgtlQWcvv9cWnZLTV19EMfRTE7kTKoH7__q13W0NmQuX4uzFtdOKXM3qu0Po6jCiKWU=46537FE3"
let keyName="SCRUM"

export async function createIssue(Summary:string,Desceiption:string){

const issueDetails={

"fields":{

"project":{
    "key":keyName
},
"summary":Summary,
"description":Desceiption,

"issuetype":{
    "name":"Bug"
},
}
}

//api call
const response= await axios.post(endPonit,issueDetails,{
headers:{
    "Content-Type":"application/json",
},
auth:{
    username:emailId,
    password:apiToken
}

})
console.log("Status code is "+response.status)
}


createIssue("Bug CREATION from api","Creating BUG using API call")


