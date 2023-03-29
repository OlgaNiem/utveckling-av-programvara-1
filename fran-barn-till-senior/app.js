function checkAge() {
    // e.preventDefault()
    const userAge = document.getElementById('age').value;
        console.log(userAge);
    if (userAge <= 0) {
        document.getElementById('result').innerHTML = 'Ange en giltig ålder';
    } else if (userAge >= 1 && userAge <= 12) {
        document.getElementById('result').innerHTML = 'Du är ett barn';
    } else if (userAge >= 13 && userAge <= 19) {
        document.getElementById('result').innerHTML = 'Du är en tonåring';
    } else if (userAge >= 20 && userAge <= 64) {
        document.getElementById('result').innerHTML = 'Du är en vuxen';
    } else {
        document.getElementById('result').innerHTML = 'Du är en senior';
    }
}