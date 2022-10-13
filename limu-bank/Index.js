//For login system event  handler ..
const loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click",function(){
    const loginArea = document.querySelector("#login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
transactionArea.style.display = "block";
})


//For Deposit button  event handler...
const depositButton = document.getElementById("deposit-button");
depositButton.addEventListener("click",function(){
   const depositNumber = getInput("deposit-amount")
   
    

updateSpanText("current-deposit",depositNumber) ;
updateSpanText("current-balance",depositNumber) ;
 
document.getElementById("deposit-amount").value = " ";

})

function getInput(id){
 const Amount = document.getElementById(id).value;
  const Number = parseFloat(Amount);
  return Number;


}
//For withdraw button event listeners.....
    const withdrawButton = document.getElementById("withdraw-button");
    withdrawButton .addEventListener("click",function (){
        const withdrawNumber = getInput("withdraw-amount");
        updateSpanText("current-balance",-1* withdrawNumber);
        updateSpanText("current-withdraw", withdrawNumber);
        document.getElementById("withdraw-amount").value= " ";
    })


      function updateSpanText(id, depositNumber){
                 const balance = document.getElementById(id).innerText;
                 const finalBalance = parseFloat(balance);
                // console.log(" finalBalance ",finalBalance)
                 const totalBalance =  depositNumber + finalBalance ; 
                // console.log("totalBalance",totalBalance)
                 document.getElementById(id).innerText = totalBalance; 
        } 
 
/*
function updateSpanText(id, withdrawNumber){
 
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;
    
   document.getElementById(id).innerText = total;
    
}
*/
 
