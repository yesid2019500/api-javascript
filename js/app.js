

let tr = document.getElementById('tr')
let corriente = document.querySelector('.td2')
let showTable = document.querySelector('#data')
let loading = document.querySelector('.loading')

let users = []
window.addEventListener("DOMContentLoaded", async ()=>{
   
 loading.innerHTML = '<h1 class="load">Loading...</h1>' 

 setTimeout(() => {
     loading.style.display = 'none'
 }, 500);

    // load api
const data = await loadData()
  

users = data

// dis function is only to see all id 
const id = users.reduce((total,id)=> {
    return Array.from (new Set ([...total,id.customer_id]))
}, [])

console.log(id)


// let prueba = [
//     {name:"yessi", num:"$10.12"},
//     {name:"Alejandra", num:"$20.34"},
//     {name:"Rocio", num:"$30.10"},
//     {name:"more", num:"$10.20"}
// ]

// let cor = "$123.6"
// console.log(parseInt(cor));
// console.log(parseFloat(cor.slice(1)))
// const sumarNu = prueba.reduce((total,id)=> total + parseFloat(id.num.slice(1)), 0) 
// console.log(sumarNu)






// pasamos la api como parametro a las funciones
renderUserOne(users)
renderUserTwo(users)
renderUserThree(users)
renderUserFour(users)
renderUserFive(users)
renderUserSix(users)
renderUserSeven(users)
renderUserEight(users)
renderUserNine(users)
renderUserTen(users)
 });


// GET api
async function loadData (){
    try {

     const response = await fetch("https://quietstreamfinancial.github.io/eng-recruiting/transactions.json")

     return await response.json();
  

    } catch (err) {
        console.log("the error is", err)
    }
 }



 
// RENDER cuentas ahorro
 function renderUserOne(users){
    //  filter id
    let usuaria = users.filter(user => user.customer_id === 70281)
   
    // filter savins account
    let accountSave = usuaria.filter(user => user.account_type === 'savings')
    // add all savings accounts
    const totalAccountSave = accountSave.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2) 

    // filter currentAccount
    let currentAccount = usuaria.filter(user => user.account_type === 'checking')
   
    // add all cheking accounts
    const totalCururrentAccount = currentAccount.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)

     
// add total of all accounts
    const totalUserAccount = usuaria.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)

        showTable.innerHTML +=`
        <tr>
            <td>${usuaria[0].customer_name}</td>
            <td>$${totalAccountSave}</td>
            <td>$${totalCururrentAccount}</td>
            <td>$${totalUserAccount}</td>
        </tr>
    `
 }

// two user
 function renderUserTwo(users){
    let usuaria = users.filter(user => user.customer_id === 61)
    let accountSave = usuaria.filter(user => user.account_type === 'savings')
    const totalAccountSave = accountSave.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2) 
    let currentAccount = usuaria.filter(user => user.account_type === 'checking')
    const totalCururrentAccount = currentAccount.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
    const totalUserAccount = usuaria.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
        showTable.innerHTML +=`
        <tr>
            <td>${usuaria[0].customer_name}</td>
            <td>$${totalAccountSave}</td>
            <td>$${totalCururrentAccount}</td>
            <td>$${totalUserAccount}</td>
        </tr>
    `
 }



 // three user
 function renderUserThree(users){
    let usuaria = users.filter(user => user.customer_id === 21178)
    let accountSave = usuaria.filter(user => user.account_type === 'savings')
    const totalAccountSave = accountSave.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2) 
    let currentAccount = usuaria.filter(user => user.account_type === 'checking')
    const totalCururrentAccount = currentAccount.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
    const totalUserAccount = usuaria.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
        showTable.innerHTML +=`
        <tr>
            <td>${usuaria[0].customer_name}</td>
            <td>$${totalAccountSave}</td>
            <td>$${totalCururrentAccount}</td>
            <td>$${totalUserAccount}</td>
        </tr>
    `
 }


 // user four
 function renderUserFour(users){
    let usuaria = users.filter(user => user.customer_id === 138)
    let accountSave = usuaria.filter(user => user.account_type === 'savings')
    const totalAccountSave = accountSave.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2) 
    let currentAccount = usuaria.filter(user => user.account_type === 'checking')
    const totalCururrentAccount = currentAccount.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
    const totalUserAccount = usuaria.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
        showTable.innerHTML +=`
        <tr>
            <td>${usuaria[0].customer_name}</td>
            <td>$${totalAccountSave}</td>
            <td>$${totalCururrentAccount}</td>
            <td>$${totalUserAccount}</td>
        </tr>
    `
 }



 // user five
 function renderUserFive(users){
    let usuaria = users.filter(user => user.customer_id === 2)
    let accountSave = usuaria.filter(user => user.account_type === 'savings')
    const totalAccountSave = accountSave.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2) 
    let currentAccount = usuaria.filter(user => user.account_type === 'checking')
    const totalCururrentAccount = currentAccount.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
    const totalUserAccount = usuaria.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
        showTable.innerHTML +=`
        <tr>
            <td>${usuaria[0].customer_name}</td>
            <td>$${totalAccountSave}</td>
            <td>$${totalCururrentAccount}</td>
            <td>$${totalUserAccount}</td>
        </tr>
    `
 }


 // user six
 function renderUserSix(users){
    let usuaria = users.filter(user => user.customer_id === 9)
    let accountSave = usuaria.filter(user => user.account_type === 'savings')
    const totalAccountSave = accountSave.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2) 
    let currentAccount = usuaria.filter(user => user.account_type === 'checking')
    const totalCururrentAccount = currentAccount.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
    const totalUserAccount = usuaria.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
        showTable.innerHTML +=`
        <tr>
            <td>${usuaria[0].customer_name}</td>
            <td>$${totalAccountSave}</td>
            <td>$${totalCururrentAccount}</td>
            <td>$${totalUserAccount}</td>
        </tr>
    `
 }


 // user seven
 function renderUserSeven(users){
    let usuaria = users.filter(user => user.customer_id === 112)
    let accountSave = usuaria.filter(user => user.account_type === 'savings')
    const totalAccountSave = accountSave.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2) 
    let currentAccount = usuaria.filter(user => user.account_type === 'checking')
    const totalCururrentAccount = currentAccount.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
    const totalUserAccount = usuaria.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
        showTable.innerHTML +=`
        <tr>
            <td>${usuaria[0].customer_name}</td>
            <td>$${totalAccountSave}</td>
            <td>$${totalCururrentAccount}</td>
            <td>$${totalUserAccount}</td>
        </tr>
    `
 }


  // user eight
  function renderUserEight(users){
    let usuaria = users.filter(user => user.customer_id === 9129)
    let accountSave = usuaria.filter(user => user.account_type === 'savings')
    const totalAccountSave = accountSave.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2) 
    let currentAccount = usuaria.filter(user => user.account_type === 'checking')
    const totalCururrentAccount = currentAccount.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
    const totalUserAccount = usuaria.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
        showTable.innerHTML +=`
        <tr>
            <td>${usuaria[0].customer_name}</td>
            <td>$${totalAccountSave}</td>
            <td>$${totalCururrentAccount}</td>
            <td>$${totalUserAccount}</td>
        </tr>
    `
 }


 // user nice
 function renderUserNine(users){
    let usuaria = users.filter(user => user.customer_id ===  1293)
    let accountSave = usuaria.filter(user => user.account_type === 'savings')
    const totalAccountSave = accountSave.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2) 
    let currentAccount = usuaria.filter(user => user.account_type === 'checking')
    const totalCururrentAccount = currentAccount.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
    const totalUserAccount = usuaria.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
        showTable.innerHTML +=`
        <tr>
            <td>${usuaria[0].customer_name}</td>
            <td>$${totalAccountSave}</td>
            <td>$${totalCururrentAccount}</td>
            <td>$${totalUserAccount}</td>
        </tr>
    `
 }



 // user ten
 function renderUserTen(users){
    let usuaria = users.filter(user => user.customer_id ===  2295)
    let accountSave = usuaria.filter(user => user.account_type === 'savings')
    const totalAccountSave = accountSave.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2) 
    let currentAccount = usuaria.filter(user => user.account_type === 'checking')
    const totalCururrentAccount = currentAccount.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
    const totalUserAccount = usuaria.reduce((total,id)=> total + Number(id.transaction_amount.slice(1)), 0).toFixed(2)
        showTable.innerHTML +=`
        <tr>
            <td>${usuaria[0].customer_name}</td>
            <td>$${totalAccountSave}</td>
            <td>$${totalCururrentAccount}</td>
            <td>$${totalUserAccount}</td>
        </tr>
    `
 }

