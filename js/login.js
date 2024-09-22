// login button
document.getElementById('button-login')
.addEventListener('click', function(event){
    event.preventDefault(); // prevent form submission
    // console.log('login button clicked');

    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // console.log(phoneNumber, pinNumber);

    // bad way to validate
    if(phoneNumber=== '5' && pinNumber=== '1234'){
        console.log('you are loged in')
        window.location.href = '/home.html'; // redirect to dashboard page
    }
    else{
        console.log('invalid pin number')
    }
});