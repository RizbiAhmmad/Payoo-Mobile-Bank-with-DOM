document.getElementById('btn-cash-out').addEventListener('click', function(event) {
    event.preventDefault(); // prevent page reload
    // console.log('cash out button clicked');

    const cashout = document.getElementById('input-cash-out').value;
    const cashoutNumber = parseFloat(cashout);
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    // console.log(cashout, pinNumber);

    // validation
    if(pinNumber === '1234'){
        console.log('cash Out Successfully Submitted')
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        // console.log(balance);

        // reduce balance
        const newBalance = balanceNumber - cashoutNumber;

        // update
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Faild to cash out..Try again later');
    }

});