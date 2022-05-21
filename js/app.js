

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

    // cargar api
const data = await loadData()
  

users = data

// pasamos la api como parametro a las funciones
renderSaveAccount(users)
renderCurrentAccount(users)

 });


// Petion api
async function loadData (){
    try {

     const response = await fetch("https://quietstreamfinancial.github.io/eng-recruiting/transactions.json")

     return await response.json();
  

    } catch (err) {
        console.log("the error is", err)
    }
 }



 
// RENDER cuentas ahorro
 function renderSaveAccount(users){
 let savings = users.filter(users => users.account_type === 'savings')
    savings.forEach((user, index) => {
   
    showTable.innerHTML +=`
        <tr>
            <td>${user.customer_name}</td>
            <td>${user.transaction_amount}</td>
            <td>$0</td>
            <td>${user.transaction_amount}</td>
        </tr>
    `
    
//  console.log(index)
 });

 }



// RENDER  cuentas corrientes
 function renderCurrentAccount(users){
    let checking = users.filter(users => users.account_type === 'checking' )
    checking.forEach((user,index) => {
       showTable.innerHTML +=`
           <tr>
               <td>${user.customer_name}</td>
               <td>$0</td>
                 <td>${user.transaction_amount}</td>
                 <td>${user.transaction_amount}</td>
           </tr>
       ` 
    });
   
}
