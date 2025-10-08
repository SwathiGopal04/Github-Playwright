import test, { chromium, expect } from '@playwright/test'

const user="admin"
const pass="mZE@l60wP%iO"
const cred=`${user}:${pass}`
const basicAuth=btoa(cred)

let id:any


test("Create a Resources",async({request})=>{
    /* const browser= await chromium.launch()
    const context= await browser.newContext()
    const page = context.request */

const response= await request.post("https://dev194776.service-now.com/api/now/table/incident",{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Basic ${basicAuth}`
//directly we cannot pass value -> in Base64 -> ASCII
    },
    data:{
      "short_description": "Welcome to Playwright Session"
    }
})



const resBody=await response.json()
console.log(resBody)
id=resBody.result.sys_id
expect(response.statusText()).toBe("Created")

//assertion

const statusCode=response.status()
expect(statusCode).toBe(201)

})

test("GET incident",async({request})=>{

const response=await request.get(`https://dev194776.service-now.com/api/now/table/incident/${id}`,{

headers:{
    "Content-Type":"application/json",
        "Authorization":`Basic ${basicAuth}`
}

})

const res=await response.json()
console.log(res)

const status=response.status()
expect(status).toBe(200)
expect(response.statusText()).toBe("OK")
})

test("Update a Resources",async({request})=>{
    /* const browser= await chromium.launch()
    const context= await browser.newContext()
    const page = context.request */

const response= await request.patch(`https://dev194776.service-now.com/api/now/table/incident/${id}`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Basic ${basicAuth}`
//directly we cannot pass value -> in Base64 -> ASCII
    },
    data:{
      "short_description": "Welcome to Playwright Session Update"
    }
})
const responseBody=await response.json()
console.log(responseBody)
id=responseBody.result.sys_id
expect(response.statusText()).toBe("OK")

//assertion

const statCode=response.status()
expect(statCode).toBe(200)

})