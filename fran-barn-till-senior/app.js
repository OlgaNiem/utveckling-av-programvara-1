function checkAge() {
    const userAge = document.getElementById('age').value;
        console.log(userAge);
    if (userAge < 0) {
        console.log("Ange en giltig ålder");
    } else if (userAge >= 0 && age <= 12) {
        console.log("Du är ett barn");
    } else if (userAge >= 13 && age <= 19) {
        console.log("Du är en tonåring");
    } else if (userAge >= 20 && age <= 64) {
        console.log("Du är en vuxen");
    } else {
        console.log("Du är en senior");
    }
}