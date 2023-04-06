function check() {
    var guess1 = parseInt(document.getElementById("guess1").value);
    var guess2 = parseInt(document.getElementById("guess2").value);
    var guess3 = parseInt(document.getElementById("guess3").value);
    var guess4 = parseInt(document.getElementById("guess4").value);
    var guess5 = parseInt(document.getElementById("guess5").value);
    var guess6 = parseInt(document.getElementById("guess6").value);
    var guess7 = parseInt(document.getElementById("guess7").value);
    var guesses = [guess1, guess2, guess3, guess4, guess5, guess6, guess7];
    var randomNumbers = generateRandomNumbers();
    var correctGuesses = 0;

    for (var i = 0; i < guesses.length; i++) {
        if (randomNumbers.includes(guesses[i])) {
            correctGuesses++;
        }
    }

    var resultText = "Du gissade " + correctGuesses + " nummer rätt!";
    document.getElementById("result").innerHTML = resultText;
}

function generateRandomNumbers() {
    var randomNumbers = [];
    while (randomNumbers.length < 7) {
        var randomNumber = Math.floor(Math.random() * 35) + 1;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}

function playAgain() {
    location.reload();
}
