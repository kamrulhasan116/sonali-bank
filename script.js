const loginButton = document.getElementById('loginBtn');
loginButton.addEventListener('click', function(){

    const loginArea = document.getElementById('login-area');
    loginArea.style.display="none";
    const transectionArea = document.getElementById('transection-area');
    transectionArea.style.display ="block";
})

const depositBtn = document.getElementById('depositButton');
depositBtn.addEventListener('click', function(){

    const inputDeposit = document.getElementById('inputDeposit').value;
    const inputDepositValue = parseFloat(inputDeposit);
    
    // const depositAmt = document.getElementById('depositAmount').innerText;
    // const depositNmber = parseFloat(depositAmt);
    // const totalDeposit = inputDepositValue+depositNmber
    // document.getElementById('depositAmount').innerText = totalDeposit;
    updateSpanText('depositAmount', inputDepositValue)
    

    // const currentBalance= document.getElementById('currentBalance').innerText;
    // const balanceNumber = parseFloat(currentBalance);
    // const total = balanceNumber+inputDepositValue;
    // document.getElementById('currentBalance').innerText=total;

    updateSpanText('currentBalance',inputDepositValue );
    
    document.getElementById('inputDeposit').value = "";

    
})

function updateSpanText(id,inputDepositValue){
    const currentBalance= document.getElementById(id).innerText;
    const balanceNumber = parseFloat(currentBalance);
    const total = balanceNumber+inputDepositValue;
    document.getElementById(id).innerText=total;
}

const withdrawBtn = document.getElementById('withdrawButton');
withdrawBtn.addEventListener('click', function(){
    const addWithdraw = getInputNumber("inputWithdraw");
    updateSpanText('withdrawAmount', addWithdraw)
    updateSpanText('currentBalance',-1*addWithdraw );
    document.getElementById('inputWithdraw').value = "";
})

function getInputNumber(id){
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;

}
