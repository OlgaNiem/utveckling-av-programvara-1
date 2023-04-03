function check() {
    const guess = parseInt(document.getElementById('guess').value);
    const randomNumber = Math.floor(Math.random() * 11);

    if(guess === randomNumber) {
        document.getElementById('result').innerHTML = 'Du gissade rätt!';
        } else {
        document.getElementById('result').innerHTML = `Tyvärr, numret var ${randomNumber}. Försök igen.`;
        }
  }
  