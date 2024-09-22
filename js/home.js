// handling add button
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    // prevent page reload
    event.preventDefault();

// console.log('money add button clicked');

// step 2
const addMoneyInput = document.getElementById('input-add-money').value;
console.log(typeof addMoneyInput);

const pinNumberInput = document.getElementById('input-pin-number').value;
console.log(pinNumberInput);

// step : 3 validate pin number
if (pinNumberInput === '1234'){
    console.log('Adding money to your account');

    // step: 4 get the current balance
    const balance = document.getElementById('account-balance').innerText;
    console.log(typeof balance);

    // step : 5 add addmoney input with balance
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance);

    // step 6 Update the balance
    document.getElementById('account-balance').innerText = newBalance;


}

else{
    alert('Faild to add money. please try again');
}
});