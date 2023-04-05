
const countdownEl = document.getElementById("countdown");

let count = 11;
const countdown = setInterval(() => {
    count--;
    if (count === 0) {
        clearInterval(countdown);
        document.body.classList.add('red-bg');
        countdownEl.textContent = 'Hej på dig!';
    } else if (count === 1) {
        countdownEl.textContent = "1 sekund";
    } else {
        countdownEl.textContent = count + " sekunder";
    }
}, 1000);
