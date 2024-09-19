// login button
document.getElementById('button-login')
.addEventListener('click', function(event){
    event.preventDefault(); // prevent form submission
    console.log('login button clicked');

    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
});