function checkNumber() {
    const userNumber = document.getElementById('number').value;
    const characterCounterElement = document.querySelector('#character-counter');

    console.log(userNumber);
    if(userNumber > 0){
    console.log('Positive Number')
    document.getElementById('yourNumber').innerHTML =  userNumber + ' Talet är positivt' 
    characterCounterElement.classList = 'text-positiv';
    }
    else if(userNumber < 0){
    console.log('Its a negative number')
    document.getElementById('yourNumber').innerHTML =  userNumber + ' Talet är negativt' 
    characterCounterElement.classList = 'text-negativ';
    }
    else{
    console.log('Its a zero')
    document.getElementById('yourNumber').innerHTML =  userNumber + ' Talet är noll'
    characterCounterElement.classList = 'text-noll';
    }  
}
