// show the cashout form
document.getElementById('btn-show-cashout').addEventListener('click', function() {

    // show cashout button
    // console.log('cashout button clicked');

    document.getElementById('cashout-form').classList.remove('hidden');

    // hide add money form
    document.getElementById('addMoney-form').classList.add('hidden');
} );


// show add money form add hide cashout form

document.getElementById('btn-show-addMoney').addEventListener('click', function() {

    // show cashout button
    // console.log('cashout button clicked');

    document.getElementById('addMoney-form').classList.remove('hidden');

    // hide add money form
    document.getElementById('cashout-form').classList.add('hidden');
} );
